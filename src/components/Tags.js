"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';

import { useNotes } from '../context/NotesContext';

function Tags() {
  console.log('running in TAGS')
  const router = useRouter();
  const searchParams = useSearchParams()
  const {notes} = useNotes()

  let keyword = searchParams.get("keyword") || "all";
  const currentTag = searchParams.get("tag") || null;

  

  // Preserve either "all" or "archive" instead of "tag"
  if (keyword === "tag") {
    keyword = searchParams.get("archive") ? "archive" : "all";
  }

  // Determine whether we are in archive mode
  const isArchive = keyword === "archive";

  // Extract only archived notes' tags if in archive mode
  const relevantNotes = isArchive
    ? notes.filter(note => note.archived)
    : notes;

  // Extract all unique tags from the selected notes
  const allTags = [...new Set(relevantNotes.flatMap(note => note.tags))].sort();

  // Helper function to capitalize
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Click handler to update the URL while preserving keyword and applying tag filter
  const handleTagClick = (tag) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("keyword", keyword); // Preserve current keyword ("all" or "archive")
    params.set("tag", tag); // Set tag in the query
    router.push(`/user?${params.toString()}`, { shallow: true });
  };

  return (
    <div className="mt-2 overflow-scroll">
      <div className="mb-4 font-bold">{isArchive ? "Archived Tags" : "Tags"}</div>
      <div className="mt-2">
        {allTags.length === 0 ? (
          <p className="text-gray-600">No tags available.</p>
        ) : (
          allTags.map((tag) => (
            <div 
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`py-3 pl-[14.5px] flex items-center cursor-pointer hover:bg-gray-100 ${
                currentTag === tag ? "bg-blue-200" : ""
              }`}
            >
              <Image 
                src="/icon-tag.svg" 
                className="mr-3" 
                alt={tag} 
                width={32} 
                height={32} 
              />
              <span>{capitalize(tag)}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tags;
