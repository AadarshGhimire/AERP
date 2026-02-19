import express from "express";
import { createStory, getStoryId, getAllStory, deleteStory, updateStory } from "../controllers/StoryControllers.js";

const router = express.Router();

router.post("/story", createStory);
router.get("/story/:id", getStoryId);
router.get("/story", getAllStory);
router.put("/story/:id", updateStory);
router.delete("/story/:id", deleteStory);

export default router;
