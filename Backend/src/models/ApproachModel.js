import mongoose from "mongoose";

const ApproachSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },

}, { timestamps: true });

export const Approach = mongoose.model("Approach", ApproachSchema);