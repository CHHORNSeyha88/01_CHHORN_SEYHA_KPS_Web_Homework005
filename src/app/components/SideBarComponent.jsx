import React from 'react';
import Image from 'next/image';
import { ChevronFirst, MoreVertical } from 'lucide-react';

const SideBarComponent = ({ children }) => {
  return (
    <aside className="h-screen flex flex-col bg-white shadow-sm">
      {/* Navbar Container */}
      <nav className="flex flex-col h-full">
        {/* Header Section */}
        <div className="p-4 pb-2 flex justify-center items-center mb-10">
          {/* Profile Image */}
          <Image
            src="/images/profile-anime.jpg"
            width={150}
            height={150}
            alt="Profile"
            className="rounded-full"
          />

        </div>

        <ul className="flex-1 px-3 overflow-y-auto">
          {children}
        </ul>

        {/* Footer Section */}
        <div className="border-t flex p-3">
          <Image
            className="rounded-md"
            src="/images/profile-anime.jpg"
            width={30}
            height={30}
            alt="Profile"
          />
          <div className="flex justify-between items-center w-52 ml-3">
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBarComponent;