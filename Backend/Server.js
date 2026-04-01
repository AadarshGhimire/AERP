import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js"
import contactRoutes from "./src/routers/ContactRoutes.js";
import WhyChooseUsRoutes from "./src/routers/ChooseUsRoutes.js"
import IndustryRoutes from "./src/routers/IndustriesRoutes.js";
import ApproachRoutes from "./src/routers/ApproachRoutes.js";
import VisionRoutes from "./src/routers/VisionRoutes.js";
import AdminRoutes from "./src/routers/AdminRoutes.js";
import UserRoutes from "./src/routers/UserRoutes.js";
import CourseRoutes from "./src/routers/CourseRoutes.js";
import ExamRoutes from "./src/routers/ExamControllers.js";
import HeritageRoutes from "./src/routers/HeritageRoutes.js";
import PrinciplesRoutes from "./src/routers/PrinciplesRoutes.js";
import StoryRoutes from "./src/routers/StoryRoutes.js";

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
app.use("/api/admin", AdminRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/courses", CourseRoutes);
app.use("/api/exams", ExamRoutes);
app.use("/api/heritage", HeritageRoutes);
app.use("/api/principles", PrinciplesRoutes);
app.use("/api/story", StoryRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.error("Failed to connect to the database:", error);
});
