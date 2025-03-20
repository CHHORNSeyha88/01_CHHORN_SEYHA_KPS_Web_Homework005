"use client"; // Mark as a Client Component

import React from 'react';
import Link from 'next/link'; // Import Link for navigation

const SideBarItems = ({ href, icon, text, active, alert }) => {
  return (
    <Link href={href} passHref>
      <li
        className={`flex items-center p-2 rounded-md cursor-pointer hover:font-bold transition-all ${
          active ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
        }`}
      >
        <span className='text-red-400'>{icon}</span> 
        <span className="ml-3 text-[18px] text-[#0b3954] ">{text}</span>
        {alert && (
          <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {alert}
          </span>
        )}
      </li>
    </Link>
  );
};

export default SideBarItems;