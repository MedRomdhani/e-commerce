import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      minLength: [3, "name too short"],
      required: [true, "name is required"],
    },
    password: {
      type: String,
      minLength: [3, "password too short"],
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      match: [/^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/, "Please add a valid email address."],
      required: [true, "Please enter Email Address"],
      unique: true,
      lowercase: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
    },
  },
  { timestamps: true }
);

export const userModel = model("user", userSchema);
