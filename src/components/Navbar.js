"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get existing keyword and search query from URL
  const keyword = searchParams.get("keyword") || "all"; // Preserve 'all' or 'archive'
  const initialSearch = searchParams.get("query") || "";
  const isSearchActive = searchParams.get("search") === "true"; // Detect if search is active
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  // Sync input with URL changes
  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  // Handle search input
  const handleSearchChange = (e) => {
    const newSearch = e.target.value;
    setSearchTerm(newSearch);

    const params = new URLSearchParams(searchParams.toString());

    if (newSearch) {
      params.set("keyword", keyword); // ✅ Preserve 'all' or 'archive'
      params.set("search", "true"); // ✅ Explicitly mark as search mode
      params.set("query", newSearch);
    } else {
      params.delete("query"); // ✅ Clears search when empty
      params.delete("search"); // ✅ Remove search flag
      params.set("keyword", keyword); // ✅ Reset to 'all' or 'archive'
    }

    router.replace(`/user?${params.toString()}`, { shallow: true });
  };

  return (
    <div className="flex flex-row justify-between items-center px-8 py-[18.5px] border-b border-b-gray-300">
      <h1 className="text-[24px] font-bold">
        {keyword === "archive" ? "Archived Notes" : "All Notes"}
      </h1>
      <div className="flex flex-row">
        {/* Desktop Search Bar */}
        <div className="relative w-[300px] mr-4">
          <span className="absolute inset-y-0 left-3 flex items-center">
            <Image src="/icon-search.svg" alt="Search Icon" width={32} height={32} />
          </span>
          <input
            type="text"
            placeholder={`Search in ${keyword}...`}
            className="w-full pl-10 py-[13px] border border-gray-300 rounded-lg text-sm focus:ring-blue-500 focus:border-blue-500"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <Image src="/icon-settings.svg" alt="Settings Icon" width={32} height={32} />
      </div>
    </div>
  );
}

export default Navbar;
