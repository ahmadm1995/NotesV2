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

  // State for the currently selected note
  const [selectedNote, setSelectedNote] = useState(null);

  // When the keyword changes, clear the selected note so that the list (or tags) shows.
  useEffect(() => {
    setSelectedNote(null);
  }, [keyword]);

  // Callback to handle when a note is clicked in the List component
  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  // Callback for the back button in mobile ViewNote
  const handleBack = () => {
    setSelectedNote(null);
  };

  return (
    <>
      {/* Desktop Layout: Three-column view for large screens */}
      <div className="hidden lg:flex flex-row h-full">
        {/* Left Column: List (1/4 of the screen) */}
        <div className="w-1/4 overflow-scroll border-r border-r-gray-300">
          <List keyword={keyword} onSelectNote={handleSelectNote} />
        </div>
        {/* Middle Column: Note Detail (2/4 of the screen) */}
        <div className="w-2/4 border-r border-r-gray-300">
          {selectedNote ? (
            <ViewNote note={selectedNote} />
          ) : (
            <div className="p-4">Select a note to view its details</div>
          )}
        </div>
        {/* Right Column: Action/Buttons Section (1/4 of the screen) */}
        <div className="w-1/4">
          <ButtonsSection />
        </div>
      </div>

      {/* Mobile Layout: Single-column view */}
      <div className="lg:hidden h-full overflow-auto pt-20 pb-16">
        {keyword === "tag" ? (
          // Render Tags component when keyword is "tag"
          <div className="p-4">
            
            <Tags keyword={keyword} />
          </div>
        ) : selectedNote ? (
          // If a note is selected, show the note detail along with a back button.
          <div className="p-4">
            <ViewNote note={selectedNote} onBack={handleBack} />
          </div>
        ) : (
          // Otherwise, show the list of notes.
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
