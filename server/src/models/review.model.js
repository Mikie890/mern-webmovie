import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options";

// Desc: Mongoose schema for review
export default mongoose.model(
  "Review",// Apply model options for review schema to remove _id and __v from JSON and add createdAt and updatedAt then export the model for review schema
  mongoose.Schema({
    user: {
      type: Schema.Types.ObjectId, 
      ref: "User",
      required: [true, "User is required"],
    },
    content: {
      type: String,
      required: true,
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
  }, modelOptions)
);
