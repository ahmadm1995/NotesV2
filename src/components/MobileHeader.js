import Image from 'next/image'
import React from 'react'

function MobileHeader() {
  return (
    <div className='flex items-start bg-neutral-200'>
        <div className='py-4 px-[13px] w-full'>
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
        </div>
    </div>
  )
}

export default MobileHeader