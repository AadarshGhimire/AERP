import React, { useEffect, useState } from "react";
import api from "../services/api";

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    learn: "",
  });

  // ✅ FETCH COURSES
  const fetchCourses = async () => {
    try {
      const res = await api.get("/courses");
      setCourses(res.data);
    } catch (err) {
      console.log("fetchCourses error:", err.message);
    }
  };

  useEffect(() => {
    fetchCourses();
    window.dispatchEvent(new Event("coursesUpdated"));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // -----------------------------
  // 🔥 ADD OR UPDATE COURSE
  // -----------------------------
  const saveCourse = async () => {
    try {
      let imageUrl = form.image;

      // upload image if selected
      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        const res = await api.post("/upload-image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        imageUrl = res.data.imageUrl;
      }

     const payload = {
  title: form.title,
  description: form.description,
  category: form.category,
  image: imageUrl,

  price: Number(form.price || 0),

  learn: form.learn
    ? form.learn.split(",").map(i => i.trim())
    : [],
};

      // 🔥 UPDATE MODE
      if (editingId) {
        await api.put(`/courses/${editingId}`, payload);
        console.log("✏️ Course updated");
      } 
      // 🔥 ADD MODE
      else {
        await api.post("/courses", payload);
        console.log("➕ Course added");
      }

      fetchCourses();
      resetForm();

    } catch (err) {
      console.log("saveCourse error:", err.message);
    }
  };

  // -----------------------------
  // ✏️ EDIT COURSE
  // -----------------------------
 const editCourse = (course) => {
  setEditingId(course._id);

  setForm({
    title: course.title || "",
    description: course.description || "",
    price: course.price?.toString() || "",
    category: course.category || "",
    image: course.image || "",
    learn: Array.isArray(course.learn)
      ? course.learn.join(", ")
      : course.learn || "",
  });

  setImageFile(null);
};

  // -----------------------------
  // ❌ DELETE COURSE
  // -----------------------------
  const deleteCourse = async (id) => {
    try {
      await api.delete(`/courses/${id}`);
      fetchCourses();
    } catch (err) {
      console.log("delete error:", err.message);
    }
  };

  // -----------------------------
  // 🔄 RESET FORM
  // -----------------------------
  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      price: "",
      category: "",
      image: "",
      learn: "",
    });

    setImageFile(null);
    setEditingId(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Manage Courses
      </h1>

      {/* FORM */}
      <div className="grid grid-cols-2 gap-3 bg-white p-4 shadow rounded">

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2"
        />
        
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2"
        />

        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2"
        />

        <input
          type="file"
          onChange={(e) => setImageFile(e.target.files[0])}
          className="col-span-2"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 col-span-2"
        />

        <textarea
          name="learn"
          value={form.learn}
          onChange={handleChange}
          placeholder="What you will learn (comma separated)"
          className="border p-2 col-span-2"
        />

        {/* BUTTON */}
        <button
          type="button"
          onClick={saveCourse}
          className={`text-white p-2 rounded col-span-2 ${
            editingId ? "bg-green-600" : "bg-blue-600"
          }`}
        >
          {editingId ? "Update Course" : "Add Course"}
        </button>

        {/* CANCEL EDIT */}
        {editingId && (
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-400 text-white p-2 rounded col-span-2"
          >
            Cancel Edit
          </button>
        )}
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {courses.map((c) => (
          <div key={c._id} className="bg-white p-4 shadow rounded">

            <img
              src={c.image}
              className="h-40 w-full object-cover"
              alt={c.title}
            />

            <h2 className="font-bold text-lg">{c.title}</h2>
            <p>{c.description}</p>
            <p>💰 {c.price}</p>
            <p>📚 {c.category}</p>

            <div className="flex gap-2 mt-2">

              <button
                onClick={() => editCourse(c)}
                className="text-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => deleteCourse(c._id)}
                className="text-red-500"
              >
                Delete
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
}