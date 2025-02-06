import React from 'react';

import Image from 'next/image';

export default function ButtonsSection({setDeleteButton, setArchiveButton,selectedNote }) {
  const isArchived = selectedNote?.archived
  const handleArchive = () => {
    
    console.log('Archived')
   
  
  };
  const handleDelete = () => {
    
    console.log('Delete')

   
  
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
