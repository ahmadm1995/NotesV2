import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MobileMenubar() {
  
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/icon-home.svg",
        href: "/user",
        keyword: "all",
        search: false, // 🔹 No search bar
      },
      {
        icon: "/icon-search.svg",
        href: "/user",
        keyword: "all", // 🔥 Keep keyword same, only toggle search mode
        search: true, // 🔹 Enable search bar
      },
      {
        icon: "/icon-archive.svg",
        href: "/user",
        keyword: "archive",
        search: false,
      },
      {
        icon: "/icon-tag.svg",
        href: "/user",
        keyword: "tag",
        search: false,
      },
      {
        icon: "/icon-settings.svg",
        href: "/user",
        keyword: "setting",
        search: false,
      },
    ],  
  },
]

  return (
    <div className="flex justify-around items-center bg-white p-3 border-t border-gray-300">
      {menuItems[0].items.map((item, index) => {
        const searchParam = item.search ? "&search=true" : ""; // Append search param if needed
        return (
          <Link 
            key={index} 
            href={`/user?keyword=${item.keyword}${searchParam}`} 
            className="flex flex-col items-center"
          >
            <Image src={item.icon} alt={`Menu Icon ${index}`} width={24} height={24} />
          </Link>
        )
      })}
    </div>
  )
}

export default MobileMenubar
