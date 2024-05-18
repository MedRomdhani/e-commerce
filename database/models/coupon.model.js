import { Schema, model } from "mongoose";

const couponSchema = new Schema(
  {
    code: {
      type: String,
      minLength: [5, "code too short"],
      required: true,
    },
    expires: {
      type: Date,
    },
    discount: {
      type: Number,
      default: 0,
    },
  }
);

export const couponModel = model("coupon", couponSchema);
