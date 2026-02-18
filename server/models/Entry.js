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
    },

    content: {
      type: String,
      required: true,
    },

    mood: {
      type: String,
      default: "neutral",
    },

    imageUrl: {
      type: String,
    },

    audioUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

entrySchema.index({ user: 1, createdAt: -1 });

const Entry = mongoose.model("Entry", entrySchema);

export default Entry;
