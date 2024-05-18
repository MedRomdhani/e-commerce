import { Schema, model } from "mongoose";

const brandSchema = new Schema(
  {
    name: {
      type: String,
      minLength: [2, "name too short"],
      required: true,
    },
    slug: {
      type: String,
    },
    logo: {
      type: String,
    },
  }
);

export const brandModel = model("brand", brandSchema);
