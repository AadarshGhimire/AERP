import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function ManageExams() {

  const [exams, setExams] = useState([]);
  const [courses, setCourses] = useState([]);

  const [form, setForm] = useState({
    title: "",
    courseId: "",
    duration: "",
  });

  // ✅ FETCH EXAMS
  const fetchExams = async () => {
    try {
      const res = await api.get("/exams");
      setExams(res.data);
    } catch (err) {
      console.log("fetchExams error:", err.message);
    }
  };

  // ✅ FETCH COURSES (for dropdown)
  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (err) {
      console.log("fetchCourses error:", err.message);
    }
  };

  useEffect(() => {
    fetchExams();
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ✅ ADD EXAM (SAVE TO DB)
  const addExam = async () => {
    try {
      if (!form.title || !form.courseId) {
        return alert("Fill all fields");
      }

      await api.post("/exams", {
        title: form.title,
        courseId: form.courseId,
        duration: form.duration,
      });

      fetchExams(); // refresh list

      setForm({
        title: "",
        courseId: "",
        duration: "",
      });

    } catch (err) {
      console.log("addExam error:", err.message);
    }
  };

  // ❌ DELETE EXAM
  const deleteExam = async (id) => {
    try {
      await api.delete(`/exams/${id}`);
      fetchExams();
    } catch (err) {
      console.log("deleteExam error:", err.message);
    }
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Manage Exams
      </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded shadow mb-6 grid grid-cols-2 gap-4">

        <input
          name="title"
          placeholder="Exam Title"
          value={form.title}
          onChange={handleChange}
          className="border p-2"
        />

        {/* 🔥 COURSE DROPDOWN */}
        <select
          name="courseId"
          value={form.courseId}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="">Select Course</option>
          {courses.map(c => (
            <option key={c._id} value={c._id}>
              {c.title}
            </option>
          ))}
        </select>

        <input
          name="duration"
          placeholder="Duration (minutes)"
          value={form.duration}
          onChange={handleChange}
          className="border p-2"
        />

        <button
          onClick={addExam}
          className="bg-blue-600 text-white px-4 py-2 rounded col-span-2"
        >
          Add Exam
        </button>

      </div>

      {/* LIST */}
      <div className="space-y-4">

        {exams.map(exam => (
          <div key={exam._id} className="bg-white p-4 shadow flex justify-between">

            <div>
              <h2 className="font-bold">{exam.title}</h2>
              <p>Course ID: {exam.courseId}</p>
              <p>Duration: {exam.duration} mins</p>
            </div>

            <button
              onClick={() => deleteExam(exam._id)}
              className="text-red-500"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}