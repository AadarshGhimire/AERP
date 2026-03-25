import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";
import { UserCircle } from "lucide-react";

export default function DashboardHome() {

  const [openMenu, setOpenMenu] = useState(false);

  // Sample Data
  const barData = [
    { name: "Jan", users: 40 },
    { name: "Feb", users: 80 },
    { name: "Mar", users: 65 },
    { name: "Apr", users: 120 }
  ];

  const pieData = [
    { name: "Courses", value: 10 },
    { name: "Exams", value: 12 },
    { name: "Users", value: 540 }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        {/* Profile Section */}
        <div className="relative">
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center gap-2 cursor-pointer bg-white px-4 py-2 rounded shadow"
          >
            <UserCircle />
            <span>Admin</span>
          </div>

          {openMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Edit Profile
              </button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-gray-500">Total Exams</h2>
          <p className="text-3xl font-bold mt-2">12</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-gray-500">Total Users</h2>
          <p className="text-3xl font-bold mt-2">540</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-gray-500">Revenue</h2>
          <p className="text-3xl font-bold mt-2">$4,200</p>
        </div>

      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Bar Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="mb-4 font-semibold">
            User Growth
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="mb-4 font-semibold">
            Platform Distribution
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}