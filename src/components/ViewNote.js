import Image from 'next/image';
import React from 'react';

function ViewNote({ note, onBack }) {
  if (!note) {
    return <div className="p-4">No note selected.</div>;
  }

  return (
    <div className="p-4 h-full flex flex-col">
      {/* Header Section */}
      <div>
        {/* Note Title */}
        <h1 className="font-extrabold text-[24px] mb-4">{note.name}</h1>
        
        {/* Tags Section */}
        <div className="flex items-center mb-4 text-[14px]">
          <Image className="mr-1" src="/icon-tag.svg" height={16} width={16} alt="Tag Icon" />
          <h1 className="pr-[61px] mr-2">Tags</h1>
          <div>
            {note.tags.map((tag, index) => (
              <span key={index}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
                {index < note.tags.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
        
        {/* Last Edited */}
        <div className="flex mb-4 text-[14px]">
          <Image className="mr-1" src="/icon-clock.svg" height={16} width={16} alt="Clock Icon" />
          <h1 className="pr-[20px] mr-1">Last Edited</h1>
          <h1>
            {new Date(note.lastEdited).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </h1>
        </div>
  
        <hr className="mb-4 border-gray-300" />
      </div>

      {/* Scrollable Note Body */}
      <div className="flex-1 overflow-auto">
        <p className="text-gray-700">{note.body}</p>
      </div>

      {/* Footer: Buttons */}
      <div>
        <hr className="mb-4 border-gray-300" />
        <div className="flex space-x-4 mb-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Save Note
          </button>
          <button className="bg-neutral-600 text-white px-4 py-2 rounded-lg hover:bg-neutral-700">
            Cancel
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

export default ViewNote;
