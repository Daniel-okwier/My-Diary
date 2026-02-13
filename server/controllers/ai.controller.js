import {
  enhanceWriting,
  generateTitle,
  generateSummary,
  detectMood,
} from "../services/ai.service.js";

export const enhanceEntry = async (req, res) => {
  try {
    const { text, tone } = req.body;
    const enhanced = await enhanceWriting(text, tone);
    res.json({ enhanced });
  } catch (error) {
    res.status(500).json({ message: "AI enhancement failed" });
  }
};

export const titleGenerator = async (req, res) => {
  try {
    const { text } = req.body;
    const title = await generateTitle(text);
    res.json({ title });
  } catch (error) {
    res.status(500).json({ message: "Title generation failed" });
  }
};

export const summaryGenerator = async (req, res) => {
  try {
    const { text } = req.body;
    const summary = await generateSummary(text);
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ message: "Summary generation failed" });
  }
};

export const moodAnalyzer = async (req, res) => {
  try {
    const { text } = req.body;
    const mood = await detectMood(text);
    res.json({ mood });
  } catch (error) {
    res.status(500).json({ message: "Mood detection failed" });
  }
};
