"use client";
import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";

interface Template {
  id: number;
  name: string;
  status: string;
  languages: string;
  categories: string;
}

export default function Templates() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch("/api/templates");
        const data = await response.json();
        console.log("Fetched Templates:", data);

        if (!Array.isArray(data)) {
          throw new Error("Templates response is not an array");
        }

        setTemplates(data);
      } catch (error) {
        console.error("Error fetching templates:", error);
      }
    };

    fetchTemplates();
  }, []);

  // Filter templates based on search query
  const filteredTemplates = useMemo(() => {
    return templates.filter((template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, templates]);

  return (
    <div>
      <div className="bg-[#F5F6FA]">
        <div className="pt-6 px-6">
          <h1 className="text-2xl font-bold tracking-tight mb-2">Your Templates</h1>
          <p className="text-wrap text-lg">
            Effortlessly create and customize templates to broadcast engaging messages to your{" "}
            <span className="text-green-700">users.</span>
          </p>
        </div>
        <div className="flex px-6 py-10 justify-between">
          {/* Search Bar */}
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="flex bg-white border rounded-xl transition duration-200">
              <img src="/misc/search.svg" alt="search" className="ml-2 h-5 w-5 self-center" />
              <input
                type="search"
                className="flex-1 px-4 py-2 bg-white outline-none rounded-xl transition duration-200"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>

          <div className="mr-10">
            <Link href="/add-template" className="bg-green-600 text-white rounded-lg px-6 py-4 shadow-xl hover:opacity-90">
              Create Message Template
            </Link>
          </div>
        </div>

        {/* Templates Table */}
        <div className="w-full bg-white rounded-2xl">
          <table className="min-w-full bg-white table-auto">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-3 text-left font-semibold text-neutral-900">Template Name</th>
                <th className="px-6 py-3 text-left font-semibold text-neutral-900">Languages</th>
                <th className="px-6 py-3 text-left font-semibold text-neutral-900">Categories</th>
                <th className="px-6 py-3 text-left font-semibold text-neutral-900">Status</th>
                <th className="px-6 py-3 text-left font-semibold text-neutral-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTemplates.length > 0 ? (
                filteredTemplates.map((template) => (
                  <tr key={template.id} className="hover:bg-green-50 text-neutral-700 text-md">
                    <td className="px-4 py-4 tracking-tight flex items-center gap-4">
                      <h1 className="capitalize">{template.name}</h1>
                    </td>
                    <td className="px-6 py-4 tracking-tight">{template.languages}</td>
                    <td className="px-6 py-4 tracking-tight">{template.categories}</td>
                    <td className="px-6 py-4 tracking-tight">
                      <div
                        className={`rounded-full px-2 py-2 bg-green-100 text-center text-sm h-10 w-full font-medium ${
                          template.status === "APPROVED" ? "text-green-600" : "text-red-600 bg-red-100"
                        }`}>
                        {template.status}
                      </div>
                    </td>
                    <td className="px-6 py-4 flex">
                      <div className="border py-1 px-2 bg-neutral-50 rounded-md cursor-pointer">
                        <img src="/misc/hamb.svg" alt="menu" className="w-6 h-5 rotate-90" />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-6 text-neutral-500">
                    No templates found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
