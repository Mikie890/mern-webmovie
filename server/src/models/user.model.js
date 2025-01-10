import mongoose from "mongoose";
import modelOptions from "./model.options";
import crypto from "crypto";

// Desc: Mongoose schema for user
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
    },
    displayName: {
      type: String,
      required: [true, "Display name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    salt: {
      type: String,
      required: true,
    },
  },
  modelOptions
); // Apply model options for user schema to remove _id and __v from JSON and add createdAt and updatedAt then export the model for user schema

// Desc: Method to set the password for the user
userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex"); // Generate a random salt
  this.password = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex"); // Generate a hashed password
};

// Desc: Method to validate the password for the user
userSchema.methods.validatePassword = function (password) {
    const hash = crypto
        .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
        .toString("hex");
    return this.password === hash; // Compare the hashed password with the password
};

const userModel = mongoose.model("User", userSchema); // Create the user model

export default userModel; 