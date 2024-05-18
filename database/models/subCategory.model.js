import { Schema, model } from "mongoose";

const subCategorySchema = new Schema({
  name: {
    type: String,
    minLength: [2, "name too short"],
    required: true,
  },
  slug: {
    type: String,
  },
  category: {
    type: Schema.ObjectId,
    ref: "category",
  },
});

export const subCategoryModel = model("subCategory", subCategorySchema);
