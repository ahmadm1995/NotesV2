'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function NotesButtons() {
  const router = useRouter()
  const handleAllNotesClick = () => {
    console.log('All Notes')
    router.push('/user?keyword=all')
   
  
  };

  const handleArchivedNotesClick = () => {
   console.log('Archived Notes')
   router.push('/user?keyword=archive')
    
  };

  return (
    <div className='mt-4'>
      <div className="flex flex-col gap-2">
        {/* Button: All Notes */}
        <button
          className="flex items-center  hover:bg-blue-100 rounded-md py-3"
          onClick={handleAllNotesClick}
        >
          <Image src='/icon-home.svg' className='ml-3 mr-2' alt="All Notes" width={32} height={32}/>
          <h1>All Notes</h1>
        </button>

        {/* Button: Archived Notes */}
        <button
          className="flex items-center hover:bg-blue-100 rounded-md py-3"
          onClick={handleArchivedNotesClick}
        >
          <Image src='/icon-archive.svg' className='ml-3 mr-2' alt="Archived Notes" width={32} height={32} />
          <h1>Archived Notes</h1>
        </button>
        <hr className="w-full border-gray-300" />
      </div>
    </div>
  );
}
