import mongoose from 'mongoose';

const VisionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description:{
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
},{ timestamps: true });

export const Vision = mongoose.model('Vision', VisionSchema);