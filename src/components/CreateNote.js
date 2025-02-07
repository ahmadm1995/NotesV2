import Image from 'next/image';
import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';  // Import context to refresh notes

function CreateNote({ onBack }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');

  const { fetchNotes } = useNotes();  // Fetch notes after creation

  const handleSave = async () => {
    if (!title.trim() || !body.trim()) {
      alert('Title and Body are required!');
      return;
    }

    const newNote = {
      name: title,
      body: body,
      tags: tags.split(',').map(tag => tag.trim()),
    };

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNote),
      });

      if (!response.ok) {
        throw new Error('Failed to create note.');
      }

      const createdNote = await response.json();
      console.log('Note created successfully:', createdNote);

      fetchNotes();  // Refresh the notes list
      onBack();      // Navigate back to the list view

    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <div className="p-4 h-full flex flex-col">
      {/* Header Section */}
      <div>
        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-[#F7F8FA] font-extrabold text-[24px] mb-4 focus:outline-none p-2 "
        />

        {/* Tags Input */}
        <div className="flex items-center mb-4 text-[14px]">
          <Image className="mr-1" src="/icon-tag.svg" height={16} width={16} alt="Tag Icon" />
          <h1 className="pr-[61px] mr-2">Tags</h1>
          <input
            type="text"
            placeholder="Enter tags separated by commas"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="flex-1 bg-[#F7F8FA]  focus:outline-none  p-2 "
          />
        </div>

        <hr className="mb-4 border-gray-300" />
      </div>

      {/* Note Body */}
      <div className="flex-1 overflow-auto">
        <textarea
          placeholder="Write your note here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full h-full bg-[#F7F8FA] text-gray-700 resize-none  p-2 "
        />
      </div>

      {/* Action Buttons */}
      <div>
        <hr className="mb-4 border-gray-300" />
        <div className="flex space-x-4 mb-5">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Save Note
          </button>
          <button
            onClick={() => {
              setTitle('');
              setBody('');
              setTags('');
            }}
            className="bg-neutral-600 text-white px-4 py-2 rounded-lg hover:bg-neutral-700"
          >
            Clear
          </button>
          {onBack && (
            <button
              onClick={onBack}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Back to List
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
