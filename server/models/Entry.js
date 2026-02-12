import mongoose from "mongoose";

const entrySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      trim: true,
      default: "",
    },
    content: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      default: "neutral", // future AI integration
    },
    media: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Entry = mongoose.model("Entry", entrySchema);
export default Entry;
