import { useState } from "react";
import { Search, FileText, Video, BookOpen } from "lucide-react";
import FadeInSection from '../Animation/FadeInSection.jsx'
const resourcesData = [
  {
    id: 1,
    type: "White Papers",
    title: "Predictive Maintenance Best Practices",
    description: "Guide to implementing predictive maintenance strategies.",
    date: "2024-12-15",
    icon: <FileText size={18} />,
  },
  {
    id: 2,
    type: "Webinars",
    title: "Vibration Analysis Introduction",
    description: "Fundamentals of vibration analysis for equipment.",
    date: "2024-11-20",
    icon: <Video size={18} />,
  },
  {
    id: 3,
    type: "Blogs",
    title: "Root Cause Analysis Case Study",
    description: "Real-world RCFA example solving equipment failures.",
    date: "2024-10-10",
    icon: <BookOpen size={18} />,
  },
];

export default function Resources() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filters = ["All", "White Papers", "Blogs", "Webinars"];

  const filteredData = resourcesData.filter((item) => {
    const matchesFilter =
      activeFilter === "All" || item.type === activeFilter;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <FadeInSection>
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Search + Filters Bar */}
      <div className="bg-white border shadow-sm rounded-2xl px-6 py-6 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        
        {/* Search */}
        <div className="relative flex-1 max-w-3xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl pl-12 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl text-sm font-medium border transition
                ${
                  activeFilter === filter
                    ? "bg-green-800 text-white border-green-800 shadow-sm"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md transition"
          >
            {/* Type */}
            <div className="flex items-center gap-2 text-green-800 font-semibold uppercase text-sm">
              <span className="p-2 bg-green-50 rounded-lg">
                {item.icon}
              </span>
              {item.type.slice(0, -1)}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 mt-5 leading-snug">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mt-3 text-base leading-relaxed">
              {item.description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-10 text-sm">
              <span className="text-gray-500">{item.date}</span>
              <button className="text-green-800 font-semibold hover:underline flex items-center gap-1">
                Read More <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-16 text-lg">
          No resources found.
        </p>
      )}
    </section>
    </FadeInSection>
  );
}
