import apiClient from "./client";

export const getStoreBooks = async () => {
  const response = await apiClient.get("/courses");
  const courses = response.data || [];

  return courses.map((course) => ({
    id: course._id,
    title: course.name,
    pages: course.duration || 0,
    price: `$${Number(course.price || 0).toFixed(2)}`,
  }));
};