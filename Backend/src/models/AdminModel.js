import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "admin"
  },
  twoFactorEnabled: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export const Admin = mongoose.model("Admin", AdminSchema);