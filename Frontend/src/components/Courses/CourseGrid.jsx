import React, { useEffect, useState } from "react";
import api from "../../services/api";
import CourseCard from "./CourseCard";
import CourseDetailPopup from "./CourseDetailPopup";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CourseGrid() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const navigate = useNavigate();

  // FETCH COURSES
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await api.get("/courses");
      setCourses(res.data || []);
    } catch (err) {
      setError("Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();

    const handleUpdate = () => fetchCourses();
    window.addEventListener("coursesUpdated", handleUpdate);

    return () => window.removeEventListener("coursesUpdated", handleUpdate);
  }, []);

  // 🔥 VIEW EXAM FUNCTION (FIXED)
  const handleViewExam = async (course) => {
  try {
    const res = await api.get(`/exams?courseId=${course._id}`);

    if (!res.data.length) {
      alert("No exam found");
      return;
    }

    const exam = res.data[0];

    navigate(`/exam/${exam._id}`);
  } catch (err) {
    console.log(err);
  }
};

  // FILTER LOGIC
  const filteredCourses = courses.filter((course) => {
    const keyword = search.toLowerCase();

    const matchSearch =
      course.title?.toLowerCase().includes(keyword) ||
      course.description?.toLowerCase().includes(keyword) ||
      course.category?.toLowerCase().includes(keyword);

    const matchCategory =
      category === "all" || course.category === category;

    return matchSearch && matchCategory;
  });

  const categories = [
    "all",
    ...new Set(courses.map((c) => c.category).filter(Boolean)),
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto py-12 px-6">

        {/* SEARCH + FILTER */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">

          {/* SEARCH */}
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />

            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border pl-10 pr-3 py-2 w-full rounded-lg"
            />
          </div>

          {/* CATEGORY */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 w-full md:w-1/4 rounded-lg"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

        </div>

        {/* STATES */}
        {loading && (
          <p className="text-center text-gray-500">Loading courses...</p>
        )}

        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {!loading && !error && filteredCourses.length === 0 && (
          <p className="text-center text-gray-500">
            No matching courses found
          </p>
        )}

        {/* GRID (FIXED HERE) */}
        {!loading && !error && filteredCourses.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
                onClick={() => setSelectedCourse(course)}
                onViewExam={handleViewExam}
              />
            ))}
          </div>
        )}

      </div>

      {/* POPUP */}
      {selectedCourse && (
        <CourseDetailPopup
          course={selectedCourse}
          close={() => setSelectedCourse(null)}
        />
      )}
    </>
  );
}