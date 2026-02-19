import mongoose from "mongoose";

const PrincipleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Principle = mongoose.model("Principle", PrincipleSchema);