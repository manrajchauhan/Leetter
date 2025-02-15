"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Templates_Library() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  interface Template {
    _id: string;
    name: string;
    category: string;
    body: string;
  }

  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "All",
    "Marketing",
    "Promotions",
    "Notifications",
    "Updates",
    "Reminders",
  ];

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch("/api/templates/template_library");
        if (!response.ok) throw new Error("Failed to fetch templates");

        const data = await response.json();
        setTemplates(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <div className="bg-[#F5F6FA]">
      <div className="pt-4 px-4">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Templates Library</h1>
        <p className="text-lg">
          Effortlessly create, manage, and broadcast WhatsApp message templates to keep your
          <span className="text-green-700"> users engaged.</span>
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex px-4 py-6 space-x-4 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            } transition duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search and Create Template Button */}
      <div className="flex px-4 py-4 justify-between">
        <form>
          <div className="flex bg-white border rounded-xl">
            <img
              src="/misc/search.svg"
              alt="search"
              className="ml-2 h-5 w-5 self-center"
            />
            <input
              type="search"
              className="flex-1 px-4 py-2 bg-white outline-none rounded-xl"
              placeholder="Search templates..."
            />
          </div>
        </form>
        <div className="mr-10">
          <Link
            href="/add-template"
            className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90"
          >
            Create WhatsApp Template
          </Link>
        </div>
      </div>

      {/* Template List */}
      <div className="w-full bg-white rounded-2xl p-6">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md animate-pulse bg-gray-200 h-32"
              ></div>
            ))}
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <div
                key={template._id}
                className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {template.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      template.category === "Marketing"
                        ? "bg-green-100 text-green-600"
                        : template.category === "Promotions"
                        ? "bg-blue-100 text-blue-600"
                        : template.category === "Notifications"
                        ? "bg-yellow-100 text-yellow-600"
                        : template.category === "Updates"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {template.category}
                  </span>
                </div>

                <p className="text-gray-700 text-sm mt-2 mb-4">{template.body}</p>

                <button
                  className="bg-green-600 text-white text-sm px-4 py-2 rounded-md shadow-md hover:opacity-90 transition-opacity duration-200"
                  onClick={() => alert(`Using template: ${template.name}`)}
                >
                  Use Template
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No templates found for the selected category.</p>
        )}
      </div>
    </div>
  );
}
