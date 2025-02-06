"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { testData } from "@/src/library/data";

function List({ keyword, onSelectNote }) {
  console.log('RUNNING');

  const router = useRouter();
  const searchParams = useSearchParams();
  
  const tag = searchParams.get("tag") || ""; // Extract the tag parameter from URL
  const query = searchParams.get("query") || ""; // Extract search query
  const isSearchActive = searchParams.get("search") === "true"; // ✅ Detect if search is active

  // Local search state for search input
  const [searchTerm, setSearchTerm] = useState(query);
  const inputRef = useRef(null);

  // Sync local searchTerm with URL query
  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Update the URL when user *leaves* the input field (onBlur)
  const handleSearchBlur = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (searchTerm) {
      params.set("query", searchTerm);
      params.set("search", "true"); // ✅ Keep search mode enabled
    } else {
      params.delete("query");
      params.delete("search"); // ✅ Remove search mode when empty
    }
    router.replace(`/user?${params.toString()}`, { shallow: true });
  };

  // ✅ FIX: Ensure searchTerm filters correctly if search is active
  const filteredNotes =
    isSearchActive && searchTerm // ✅ Apply search filter when active
      ? testData.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) // Search in tags too
        )
      : keyword === "archive"
      ? testData.filter((item) => 
          item.archived && 
          (tag ? item.tags.some((t) => t.toLowerCase() === tag.toLowerCase()) : true)
        )
      : keyword === "all"
      ? testData.filter((item) => 
          tag ? item.tags.some((t) => t.toLowerCase() === tag.toLowerCase()) : true
        )
      : testData.filter((item) =>
          item.tags.some((t) => t.toLowerCase() === keyword.toLowerCase())
        );

  console.log("Filtered Notes:", filteredNotes);

  return (
    <div>
      {/* ✅ Mobile Search Bar (only visible when search=true) */}
      {isSearchActive && (
        <div className="p-2 sticky top-0 z-10 lg:hidden">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search notes..."
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            value={searchTerm}
            onChange={handleSearchChange}
            onBlur={handleSearchBlur} // ✅ Update URL only when focus is lost
          />
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4">
        {isSearchActive
          ? "Search Results"
          : keyword === "archive" && tag
          ? `Archived Notes with Tag: ${tag}`
          : keyword === "archive"
          ? "Archived Notes"
          : tag
          ? `Notes with Tag: ${tag}`
          : "All Notes"}
      </h1>

      {filteredNotes.length === 0 && <p className="text-gray-600">No notes found for this filter.</p>}

      {filteredNotes.map((item, index) => (
        <div
          key={index}
          className="mb-4 p-4 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
          onClick={() => onSelectNote(item)}
        >
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-600">
            Last Edited:{" "}
            {new Date(item.lastEdited).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <div className="mt-2 flex flex-wrap gap-1">
            {item.tags.map((tag, i) => (
              <span key={i} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
