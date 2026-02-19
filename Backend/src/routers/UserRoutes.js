import express from "express";
import { getUsers, Login, Signup, getMyProfile,updateUserProfile } from "../controllers/UserControllers.js";
import {protect} from "../middleware/AuthMiddleware.js"
const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/getuser", getUsers);
router.get("/me", protect, getMyProfile);
router.put("/me/update", protect, updateUserProfile);
export default router;
