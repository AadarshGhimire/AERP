import mongoose from "mongoose";

const HeritageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description1: {
        type: String,
        required: true,
    },
    description2: {
        type: String,
        required: true,
    },
    buttontext: {
        type: String,
        required: true,
    },
    cards: [
        {
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
        },
    ],
}
, { timestamps: true });

export const Heritage = mongoose.model("Heritage", HeritageSchema);