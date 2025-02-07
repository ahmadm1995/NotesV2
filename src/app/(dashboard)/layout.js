'use client'
import MobileHeader from '@/src/components/MobileHeader'
import MobileMenubar from '@/src/components/MobileMenubar'
import Navbar from '@/src/components/Navbar'
import NotesButtons from '@/src/components/NotesButtons'
import TagsWrapper from '@/src/components/TagsWrapper'
import { NotesProvider } from '@/src/context/NotesContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DashboardLayout({ children, searchParams }) {
  
   
  return (
    <NotesProvider>
    <div className="h-screen flex">
      {/* Left Side: Visible only on large screens */}
      <div className="hidden lg:block lg:w-[16%] p-4 border-r border-r-gray-300 overflow-scroll h-full">
        <Link 
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </Link>
        <NotesButtons />
        <TagsWrapper className='h-full'/>
      </div>

      {/* Right Side */}
      <div className="relative w-full lg:w-[84%] bg-[#F7F8FA] flex flex-col ">
        {/* For large screens: Navbar is in the flow */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* For mobile: Fixed header */}
        <div className="fixed top-0 left-0 w-full z-10 lg:hidden">
          <MobileHeader />
        </div>

        {/* Scrollable content area */}
        {/* Adjust the top padding (pt) and bottom padding (pb) to match your header and menubar heights */}
        <div className="flex-1 w-full overflow-scroll">
          {children}
        </div>

        {/* For mobile: Fixed menu bar */}
        <div className="fixed bottom-0 left-0 w-full z-10 lg:hidden">
          <MobileMenubar />
        </div>
      </div>
    </div>
    </NotesProvider>
  );
}