import Groq from "groq-sdk";
import { env } from "../config/env.js";

const groq = new Groq({
  apiKey: env.groqApiKey,
});

// Helper function
const callAI = async (prompt, temperature = 0.7) => {
  const response = await groq.chat.completions.create({
    model: "llama3-8b-8192", // free fast model
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature,
  });

  return response.choices[0].message.content;
};


// Enhance writing
export const enhanceWriting = async (text, tone = "reflective") => {
  const prompt = `
You are a gentle writing assistant for a private diary app.
Improve the following diary entry while keeping the original meaning.
Tone: ${tone}
Do not add new events. Only enhance clarity and emotional depth.

Diary Entry:
${text}
`;

  return await callAI(prompt, 0.7);
};


// Generate title
export const generateTitle = async (text) => {
  const prompt = `
Generate a short poetic title for this diary entry:

${text}
`;

  return await callAI(prompt, 0.6);
};


// Generate summary
export const generateSummary = async (text) => {
  const prompt = `
Summarize this diary entry in 2-3 sentences:

${text}
`;

  return await callAI(prompt, 0.5);
};


// Detect mood
export const detectMood = async (text) => {
  const prompt = `
Analyze the overall emotional tone of this diary entry.
Respond with ONE word only from:
happy, reflective, peaceful, anxious, sad, hopeful, neutral.

Diary:
${text}
`;

  const result = await callAI(prompt, 0);

  return result.trim().toLowerCase();
};
