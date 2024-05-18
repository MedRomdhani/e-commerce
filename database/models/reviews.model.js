import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    text: {
      type: String,
      minLength: 5,
      required: true,
    },
    product: {
      type: Schema.ObjectId,
      ref: "product",
    },
    user: {
      type: Schema.ObjectId,
      ref: "user",
    },
    rate: {
      type: Number,
      default: 0,
    },
  }
);

export const reviewModel = model("review", reviewSchema);
