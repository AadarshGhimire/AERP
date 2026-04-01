import apiClient from "./client";

export const getResources = async () => {
  const [coursesRes, examsRes] = await Promise.all([
    apiClient.get("/courses"),
    apiClient.get("/exams"),
  ]);

  const courses = (coursesRes.data || []).map((course) => ({
    id: course._id,
    type: "Courses",
    title: course.name,
    description: course.description,
    date: course.createdAt || "",
  }));

  const exams = (examsRes.data || []).map((exam) => ({
    id: exam._id,
    type: "Exams",
    title: exam.name,
    description: `Duration: ${exam.duration || 0} min`,
    date: exam.date || "",
  }));

  return [...courses, ...exams];
};