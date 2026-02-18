import Entry from "../models/Entry.js";
import { generateTitle, detectMood } from "../services/ai.service.js";
import cloudinary from "../config/cloudinary.js"



// CREATE ENTRY

export const createEntry = async (req, res) => {
  try {
    const { title, content } = req.body

    let imageUrl = null
    let audioUrl = null

    // Upload image if exists
    if (req.files?.image) {
      const result = await cloudinary.uploader.upload(
        req.files.image[0].path,
        { folder: "myDiary/images" }
      )
      imageUrl = result.secure_url
    }

    // Upload audio if exists
    if (req.files?.audio) {
      const result = await cloudinary.uploader.upload(
        req.files.audio[0].path,
        {
          resource_type: "video", // Required for audio
          folder: "myDiary/audio"
        }
      )
      audioUrl = result.secure_url
    }

    const entry = await Diary.create({
      user: req.user.id,
      title,
      content,
      imageUrl,
      audioUrl
    })

    res.status(201).json(entry)

  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Failed to create entry" })
  }
}




// GET ALL USER ENTRIES
export const getEntries = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 10, 50); // max 50
    const skip = (page - 1) * limit;

    const filter = { user: req.user._id };

    // Optional mood filtering
    if (req.query.mood) {
      filter.mood = req.query.mood;
    }

    const [entries, total] = await Promise.all([
      Entry.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit),

      Entry.countDocuments(filter),
    ]);

    res.json({
      page,
      totalPages: Math.ceil(total / limit),
      totalEntries: total,
      entries,
    });

  } catch (error) {
    res.status(500).json({ message: "Failed to fetch entries" });
  }
};



// GET SINGLE ENTRY
export const getEntry = async (req, res) => {
  try {
    const entry = await Entry.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch entry" });
  }
};


// UPDATE ENTRY
export const updateEntry = async (req, res) => {
  try {
    const { content } = req.body;

    let updatedFields = { ...req.body };

    if (content) {
      try {
        updatedFields.mood = await detectMood(content);
      } catch (aiError) {
        console.error("AI mood update failed");
      }
    }

    const entry = await Entry.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id,
      },
      updatedFields,
      { new: true }
    );

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json(entry);

  } catch (error) {
    res.status(500).json({ message: "Failed to update entry" });
  }
};



// DELETE ENTRY
export const deleteEntry = async (req, res) => {
  try {
    const entry = await Entry.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete entry" });
  }
};
