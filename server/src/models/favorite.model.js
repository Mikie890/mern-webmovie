import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options";

// Desc: Mongoose schema for review
export default mongoose.model(
  "Favorite",
  mongoose.Schema({
    user: {
      type: Schema.Types.ObjectId, 
      ref: "User",
      required: [true, "User is required"],
    },
    mediaType: {
      type: String,
      enum: ["movie", "tv"],
      required: true,
    },
    mediaId: {
      type: String,
      required: true,
    },
    mediaTitle: {
      type: String,
      required: true,
    },
    mediaPoster: {
      type: String,
      required: true,
    },
    mediaRate: {
      type: Number,
      required: true,
    },
  }, modelOptions)
);
