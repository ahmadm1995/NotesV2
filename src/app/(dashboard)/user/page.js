"use client"; // Make this a Client Component

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import List from '@/src/components/List';
import ViewNote from '@/src/components/ViewNote';
import ButtonsSection from '@/src/components/ButtonsSection';
import Tags from '@/src/components/Tags';

function UserPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || "all";

  // Local state for the currently selected note
  const [selectedNote, setSelectedNote] = useState(null);

  // Clear selected note when keyword changes
  useEffect(() => {
    setSelectedNote(null);
  }, [keyword]);

  // Handle note selection from List component
  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  // Handle back action in mobile view
  const handleBack = () => {
    setSelectedNote(null);
  };

  return (
    <>
      {/* Desktop Layout: Three-column view */}
      <div className="hidden lg:flex flex-row h-full">
        {/* Left Column: Notes List */}
        <div className="w-1/4 overflow-scroll border-r border-r-gray-300">
          <List keyword={keyword} onSelectNote={handleSelectNote} />
        </div>

        {/* Middle Column: View Selected Note */}
        <div className="w-2/4 border-r border-r-gray-300">
          {selectedNote ? (
            <ViewNote note={selectedNote} />
          ) : (
            <div className="p-4">Select a note to view its details</div>
          )}
        </div>

        {/* Right Column: Buttons Section */}
        <div className="w-1/4">
          <ButtonsSection selectedNote={selectedNote} setSelectedNote={setSelectedNote}/>
        </div>
      </div>

      {/* Mobile Layout: Single-column view */}
      <div className="lg:hidden h-full overflow-auto pt-20 pb-16">
        {keyword === "tag" ? (
          <div className="p-4">
            <Tags keyword={keyword} />
          </div>
        ) : selectedNote ? (
          <div className="p-4">
            <ViewNote note={selectedNote} onBack={handleBack} />
          </div>
        ) : (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">
              {keyword === "archive" ? "Archived Notes" : "All Notes"}
            </h1>
            <List keyword={keyword} onSelectNote={handleSelectNote} />
          </div>
        )}
      </div>
    </>
  );
}

export default UserPage;
