import React from 'react';
import Image from 'next/image';
import { useNotes } from '../context/NotesContext';  // Import Notes Context

export default function ButtonsSection({ selectedNote, setSelectedNote }) {
  const { fetchNotes } = useNotes();  // Access fetchNotes from context

  const isArchived = selectedNote?.archived;

  const handleArchive = async () => {
    if (!selectedNote?._id) {
      console.error("No note selected to archive.");
      return;
    }

    console.log("Sending archive request for note ID:", selectedNote._id);

    try {
      const response = await fetch('/api/notes', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedNote._id,
          archived: !isArchived,  // Toggle archive status
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to archive the note.');
      }

      const updatedNote = await response.json();
      console.log("Changed note ID:", selectedNote._id);

       console.log("Calling fetchNotes after archiving...");
      fetchNotes();  // Call fetchNotes to refresh the UI
      
      // Clear selected note if it is now archived
      if (!updatedNote.archived) {
        console.log("Note archived, clearing selection.");
        setSelectedNote(null);
      }

    } catch (error) {
      console.error('Error archiving the note:', error);
    }
  };

  const handleDelete = async () => {
  if (!selectedNote?._id) {
    console.error("No note selected to delete.");
    return;
  }

  const confirmDelete = window.confirm("Are you sure you want to delete this note?");
  if (!confirmDelete) return;

  console.log("Sending delete request for note ID:", selectedNote._id);

  try {
    const response = await fetch('/api/notes', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: selectedNote._id }),  // Send note ID to API
    });

    if (!response.ok) {
      throw new Error('Failed to delete the note.');
    }

    console.log("Note deleted successfully.");

    // Refresh notes list after deletion
    fetchNotes();

    // Clear selected note after deletion
    setSelectedNote(null);

  } catch (error) {
    console.error('Error deleting the note:', error);
  }
};

  return (
    <div className="h-ful">
      <div className="flex flex-col items-center ml-4 mr-8 mt-5">
        {/* Archive Button */}
        <button
          type="button"
          className="flex items-center text-black border border-neutral-300 text-sm px-4 py-2.5 me-2 mb-3 font-medium rounded-lg w-full"
          onClick={handleArchive}
        >
          <Image src='/icon-archive.svg' alt="Archive" height={16} width={16} className="w-5 h-5 mr-2" />
          {isArchived ? "Restore Note" : "Archive Note"}
        </button>
        
        {/* Delete Button */}
        <button
          type="button"
          className="flex items-center text-black border border-neutral-300 text-sm px-4 py-2.5 me-2 font-medium rounded-lg w-full"
          onClick={handleDelete}
        >
          <Image src='/icon-delete.svg' alt="Delete" height={16} width={16} className="w-5 h-5 mr-2" />
          Delete Note
        </button>
      </div>
    </div>
  );
}
