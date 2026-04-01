import express from 'express';
import { createVision, getVisions, getVisionById, deleteVision, updateVision } from '../controllers/VisionControllers.js';

const router = express.Router();

router.post('/vision', createVision);
router.get('/getvisions', getVisions);
router.get('/vision/:id', getVisionById);
router.delete('/vision/:id', deleteVision);
router.put('/vision/:id', updateVision);

export default router;