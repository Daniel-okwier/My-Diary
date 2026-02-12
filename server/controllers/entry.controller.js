import Entry from "../models/Entry.js";


// CREATE ENTRY
export const createEntry = async (req, res) => {
  try {
    const { title, content, mood, media } = req.body;

    const entry = await Entry.create({
      user: req.user._id,
      title,
      content,
      mood,
      media,
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: "Failed to create entry" });
  }
};


// GET ALL USER ENTRIES
export const getEntries = async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.json(entries);
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
    const entry = await Entry.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user._id,
      },
      req.body,
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
