import mongoose from "mongoose";
import {createHeritage,getHeritageId,updateHeritage,deleteHeritage,getAllHeritage} from "../controllers/HeritageControllers.js";
const router = mongoose.Router();

router.post("/create", createHeritage);
router.get("/getId/:id", getHeritageId);
router.put("/update/:id", updateHeritage);
router.delete("/delete/:id", deleteHeritage);
router.get("/AllHeritage", getAllHeritage);