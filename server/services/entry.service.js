import Entry from "../models/Entry.js"

// CREATE ENTRY
export const createEntryService = async (data) => {
  return await Entry.create(data)
}

// GET USER ENTRIES (with pagination)
export const getEntriesService = async (userId, page, limit, mood) => {

  const skip = (page - 1) * limit

  const filter = { user: userId }

  if (mood) {
    filter.mood = mood
  }

  const [entries, total] = await Promise.all([

    Entry.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),

    Entry.countDocuments(filter)

  ])

  return {
    entries,
    total,
    page,
    totalPages: Math.ceil(total / limit)
  }
}

// GET SINGLE ENTRY
export const getEntryService = async (userId, entryId) => {

  return await Entry.findOne({
    _id: entryId,
    user: userId
  })

}

// UPDATE ENTRY
export const updateEntryService = async (userId, entryId, updatedFields) => {

  return await Entry.findOneAndUpdate(
    {
      _id: entryId,
      user: userId
    },
    updatedFields,
    { new: true }
  )

}

// DELETE ENTRY
export const deleteEntryService = async (userId, entryId) => {

  return await Entry.findOneAndDelete({
    _id: entryId,
    user: userId
  })

}