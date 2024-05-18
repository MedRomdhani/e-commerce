import { Schema, model } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    minLength: [5, "title too short"],
    required: true,
  },
  description: {
    type: String,
    minLength: [10, "description too short"],
    required: true,
  },
  imgCover: {
    type: String,
  },
  images: {
    type: [String],
  },
  slug: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    default: 0,
  },
  priceAfterDiscount: {
    type: Number,
    default: 0,
  },
  category: {
    type: Schema.ObjectId,
    ref: "category",
  },
  subCategory: {
    type: Schema.ObjectId,
    ref: "subCategory",
  },
  brand: {
    type: Schema.ObjectId,
    ref: "brand",
  },
  createdBy: {
    type: Schema.ObjectId,
    ref: "user",
  },
  ratingAVG: {
    type: String,
  },
  rateCount: {
    type: Number,
  },
});

export const productModel = model("product", productSchema);
