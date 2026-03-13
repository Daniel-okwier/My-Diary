import { generateTitle, detectMood } from "../services/ai.service.js";
import cloudinary from "../config/cloudinary.js";
import {
  createEntryService,
  getEntriesService,
  getEntryService,
  updateEntryService,
  deleteEntryService,
} from "../services/entry.service.js";

// CREATE ENTRY
export const createEntry = async (req, res) => {
  try {
    const { title, content } = req.body;
    let images = [];
    let audios = [];

    // Upload images
    if (req.files?.image) {
      for (const file of req.files.image) {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: "myDiary/images",
        });
        images.push(result.secure_url);
      }
    }

    // Upload audio
    if (req.files?.audio) {
      for (const file of req.files.audio) {
        const result = await cloudinary.uploader.upload(file.path, {
          resource_type: "video",
          folder: "myDiary/audio",
        });
        audios.push(result.secure_url);
      }
    }

    // Call service to interact with DB
    const entry = await createEntryService({
      user: req.user.id,
      title,
      content,
      images,
      audios,
    });

    res.status(201).json(entry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create entry" });
  }
};

// GET ALL USER ENTRIES
export const getEntries = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 10, 50);
    const mood = req.query.mood;

    const result = await getEntriesService(req.user._id, page, limit, mood);

    res.json({
      page: result.page,
      totalPages: result.totalPages,
      totalEntries: result.total,
      entries: result.entries,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch entries" });
  }
};

// GET SINGLE ENTRY
export const getEntry = async (req, res) => {
  try {
    const entry = await getEntryService(req.user._id, req.params.id);

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
        if (!updatedFields.title) {
          updatedFields.title = await generateTitle(content);
        }
      } catch (aiError) {
        console.error("AI service failed");
      }
    }

    const entry = await updateEntryService(req.user._id, req.params.id, updatedFields);

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
    const entry = await deleteEntryService(req.user._id, req.params.id);

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete entry" });
  }
};