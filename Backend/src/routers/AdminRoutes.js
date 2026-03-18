import express from 'express';
import { registerAdmin,loginAdmin, getAdminProfile } from '../controllers/AdminControllers.js';

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/profile/:id', getAdminProfile);

export default router;