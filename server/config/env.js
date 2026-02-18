import dotenv from "dotenv";

dotenv.config();

// Define required environment variables
const requiredEnv = [
  "PORT",
  "MONGO_URI",
  "JWT_SECRET",
];

// Check for required environment variables
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(` Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

// Export the environment variables
export const env = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
  aiProvider: process.env.AI_PROVIDER,
  groqApiKey: process.env.GROQ_API_KEY,  
};