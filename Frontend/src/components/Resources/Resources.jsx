import { useState } from "react";
import { Search, FileText, Video, BookOpen } from "lucide-react";

const resourcesData = [
  {
    id: 1,
    type: "White Papers",
    title: "Predictive Maintenance Best Practices",
    description: "Guide to implementing predictive maintenance strategies.",
    date: "Dec 15, 2024",
    icon: <FileText size={18} />,
  },
  {
    id: 2,
    type: "Webinars",
    title: "Vibration Analysis Introduction",
    description: "Fundamentals of vibration analysis for equipment.",
    date: "Nov 20, 2024",
    icon: <Video size={18} />,
  },
  {
    id: 3,
    type: "Blogs",
    title: "Root Cause Analysis Case Study",
    description: "Real-world RCFA example solving equipment failures.",
    date: "Oct 10, 2024",
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
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Resources
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Explore our latest white papers, blogs, and webinars to stay ahead in reliability and maintenance.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === filter
                    ? "bg-green-700 text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="group bg-white border rounded-2xl p-6 transition hover:shadow-lg hover:-translate-y-1"
          >
            {/* Type */}
            <div className="flex items-center gap-2 text-green-700 text-sm font-semibold uppercase">
              <span className="p-2 bg-green-50 rounded-lg">
                {item.icon}
              </span>
              {item.type.slice(0, -1)}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mt-4 text-gray-900 group-hover:text-green-700 transition">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-6 text-sm">
              <span className="text-gray-500">{item.date}</span>
              <button className="text-green-700 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredData.length === 0 && (
        <p className="text-center text-gray-500 mt-16">
          No resources found.
        </p>
      )}
    </section>
  );
}
