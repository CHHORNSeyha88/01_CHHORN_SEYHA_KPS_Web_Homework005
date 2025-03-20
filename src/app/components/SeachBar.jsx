'use client'
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const [userInput,setUserInput]= useState();
const router = useRouter();
const pathName = usePathname();
const handleUserInput = (e) =>{
  const {value} = e.target;
  setUserInput(value);
  
}

const handleSubmit=(e)=>{
  e.preventDefault();
  router.push(`${pathName}/?search=${userInput}`)
  
}

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex items-center w-full max-w-2xl space-x-4 bg-white rounded-full shadow-md p-2">
        {/* Search Input with Icon */}
        <div className="relative flex-grow">
          <input
          onChange={handleUserInput}
            type="text"
            placeholder="Search..."
            className="pl-12 pr-6 py-3 w-full border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
          {/* Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Search Button */}
        <button
          type="button"
          className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors whitespace-nowrap cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;