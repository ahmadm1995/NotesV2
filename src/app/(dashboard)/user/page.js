"use client"; // Make this a Client Component

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import List from '@/src/components/List';
import ViewNote from '@/src/components/ViewNote';
import CreateNote from '@/src/components/CreateNote';  // Import CreateNote component
import ButtonsSection from '@/src/components/ButtonsSection';
import Tags from '@/src/components/Tags';

function UserPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || "all";

  // State to track the selected note
  const [selectedNote, setSelectedNote] = useState(null);

  // State to track if we're in "Create Note" mode
  const [isCreating, setIsCreating] = useState(false);

  // Clear selected note when keyword changes
  useEffect(() => {
    setSelectedNote(null);
    setIsCreating(false);  // Exit create mode if the filter changes
  }, [keyword]);

  // Handle note selection from the List
  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setIsCreating(false);  // Exit create mode when a note is selected
  };

  // Handle back action to return to the list
  const handleBack = () => {
    setSelectedNote(null);
    setIsCreating(false);  // Exit create mode when going back
  };

  // Handle create new note button click
  const handleCreateNewNote = () => {
    setSelectedNote(null);  // Deselect any selected note
    setIsCreating(true);    // Enter create mode
  };

  // Handle saving the new note
  const handleSaveNote = (newNote) => {
    console.log('New note saved:', newNote);
    setIsCreating(false);  // Exit create mode after saving
    // Optionally refresh notes list here if using API
  };

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-row h-full">
        {/* Left Column: Notes List */}
        <div className="w-1/4 overflow-scroll border-r border-r-gray-300">
          <List keyword={keyword} onSelectNote={handleSelectNote} onCreateNote={handleCreateNewNote} />
        </div>

        {/* Middle Column: View or Create Note */}
        <div className="w-2/4 border-r border-r-gray-300">
          {isCreating ? (
            <CreateNote onBack={handleBack} onSave={handleSaveNote} />
          ) : selectedNote ? (
            <ViewNote note={selectedNote} />
          ) : (
            <div className="p-4">Select a note to view its details</div>
          )}
        </div>

        {/* Right Column: Buttons Section */}
        <div className="w-1/4">
          <ButtonsSection selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden h-full overflow-auto pt-20 pb-16">
        {keyword === "tag" ? (
          <div className="p-4">
            <Tags keyword={keyword} />
          </div>
        ) : isCreating ? (
          <div className="p-4">
            <CreateNote onBack={handleBack} onSave={handleSaveNote} />
          </div>
        ) : selectedNote ? (
          <div className="p-4">
            <ViewNote note={selectedNote} onBack={handleBack} />
          </div>
        ) : (
          <div className="p-4">
            <List keyword={keyword} onSelectNote={handleSelectNote} onCreateNote={handleCreateNewNote} />
          </div>
        )}
      </div>
    </>
  );
}

export default UserPage;
