import express from 'express';
import { createPrinciple, getAllPrinciples, getPrincipleById, deletePrinciple, updatePrinciple } from '../controllers/PrinciplesControllers.js';

const router = express.Router();

router.post('/principle', createPrinciple);
router.get('/getprinciples', getAllPrinciples);
router.get('/principle/:id', getPrincipleById);
router.delete('/principle/:id', deletePrinciple);
router.put('/principle/:id', updatePrinciple);

export default router;