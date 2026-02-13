import Entry from "../models/Entry.js";
import { generateTitle, detectMood } from "../services/ai.service.js";



// CREATE ENTRY
export const createEntry = async (req, res) => {
  try {
    const { title, content, media } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    let finalTitle = title;
    let mood = "neutral";

    // Try AI enhancements (non-blocking safe pattern)
    try {
      // Auto-generate title if missing
      if (!title || title.trim() === "") {
        finalTitle = await generateTitle(content);
      }

      // Detect mood
      mood = await detectMood(content);
    } catch (aiError) {
      console.error("AI processing failed:", aiError.message);
      // Continue without failing the request
    }

    const entry = await Entry.create({
      user: req.user._id,
      title: finalTitle,
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
