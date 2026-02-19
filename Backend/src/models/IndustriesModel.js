import mongoose from 'mongoose';

const industrySchema = new mongoose.Schema({
    icon: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    text:{
        type: String,
        required: true
    },
    text2:{
        type: String,
        required: true
    }   
},
{    timestamps: true
});

export const Industry = mongoose.model('Industry', industrySchema);  