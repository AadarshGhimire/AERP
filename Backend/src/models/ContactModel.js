import mongoose from "mongoose";
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    serviceInterest: {
      type: String,
      required: true,
      enum: ["RaaS Subscription", "Consulting", "Support"],
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
