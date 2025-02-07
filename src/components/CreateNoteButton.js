import React from 'react';
import { FiPlus } from 'react-icons/fi';  // Plus icon for the circular button

function CreateNoteButton({ onClick }) {
  return (
    <>
      {/* Button for Large Screens */}
      <div className="hidden lg:block my-4">
        <button
          onClick={onClick}
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
        >
          + Create New Note
        </button>
      </div>

      {/* Floating Button for Small and Medium Screens */}
      <div className="lg:hidden fixed bottom-20 right-4 z-20">
        <button
          onClick={onClick}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
        >
          <FiPlus size={24} />
        </button>
      </div>
    </>
  );
}

export default CreateNoteButton;
