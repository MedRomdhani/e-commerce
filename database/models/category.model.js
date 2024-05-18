import { Schema, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      minLength: [2, "name too short"],
      required: true,
    },
    slug: {
      type: String,
    },
    image: {
      type: String,
    },
  }
);

export const categoryModel = model("category", categorySchema);
