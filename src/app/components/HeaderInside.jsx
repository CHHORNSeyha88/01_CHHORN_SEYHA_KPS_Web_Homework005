"use client"
import { usePathname } from 'next/navigation';
import React from 'react';
import SelectComponent from './BookCategoriesSelectionComponent';

const HeaderInsideContent = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className='w-full h-full bg-white rounded-4xl flex flex-col'>
      {/* Sticky header display */}
     
      {/* Scrollable Content Section */}
      <div className='flex-grow overflow-auto p-4 max-h-[80vh]'>
        {children}
      </div>
    </div>
  );
};

export default HeaderInsideContent;
