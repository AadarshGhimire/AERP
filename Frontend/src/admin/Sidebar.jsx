import React from "react";
import { LayoutDashboard, GraduationCap , BookOpen, Upload, Users, BarChart } from "lucide-react";

export default function Sidebar({ setPage }) {

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">

      <h1 className="text-2xl font-bold mb-8">
        Admin Panel
      </h1>

      <div className="space-y-4">

        <button
          onClick={() => setPage("dashboard")}
          className="flex items-center gap-3 w-full hover:bg-gray-700 p-2 rounded"
        >
          <LayoutDashboard size={20}/>
          Dashboard
        </button>

         <button
           onClick={() => setPage("courses")}
          className="flex items-center gap-3 w-full hover:bg-gray-700 p-2 rounded"
          >
           <GraduationCap size={20} />
             Manage Courses
        </button>       

        <button
          onClick={() => setPage("exams")}
          className="flex items-center gap-3 w-full hover:bg-gray-700 p-2 rounded"
        >
          <BookOpen size={20}/>
          Manage Exams
        </button>

        <button
          onClick={() => setPage("upload")}
          className="flex items-center gap-3 w-full hover:bg-gray-700 p-2 rounded"
        >
          <Upload size={20}/>
          Upload Questions
        </button>

        <button
          onClick={() => setPage("users")}
          className="flex items-center gap-3 w-full hover:bg-gray-700 p-2 rounded"
        >
          <Users size={20}/>
          Users
        </button>

        <button
          onClick={() => setPage("analytics")}
          className="flex items-center gap-3 w-full hover:bg-gray-700 p-2 rounded"
        >
          <BarChart size={20}/>
          Analytics
        </button>

      </div>
    </div>
  );
}