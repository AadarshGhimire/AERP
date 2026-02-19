import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"
import contactRoutes from "./routers/ContactRoutes.js";
import WhyChooseUsRoutes from "./routers/ChooseUsRoutes.js"
import IndustryRoutes from "./routers/IndustriesRoutes.js";
import ApproachRoutes from "./routers/ApproachRoutes.js";
import VisionRoutes from "./routers/VisionRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());
app.use("/api/industries", IndustryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/whychooseus", WhyChooseUsRoutes);
app.use("/api/approach", ApproachRoutes);
app.use("/api/vision", VisionRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});
