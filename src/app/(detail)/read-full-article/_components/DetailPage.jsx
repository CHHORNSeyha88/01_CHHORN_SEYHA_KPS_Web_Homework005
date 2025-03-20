"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { House } from "lucide-react";
import { Book } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { BookOpen } from "lucide-react";
const DetailPage = ({ detail }) => {
  const searchParam = useSearchParams();
  const name = searchParam.get("name");
  const myTitle = searchParam.get("title");
  const myType = searchParam.get("type");
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 mb-8">
        <Link href="/">
        <div className="flex">
          <span className="flex gap-2 font-bold text-[1.2rem] text-[#0b3954] hover:text-[#087e8b]">
            <House /> Home 
          </span>
          <ChevronRight size={30} />
          </div>

        </Link>
        <Link
          href={
            myType == "cartoon" ? "/old-school-cartoons" : "/book-categories"
          }
        >
          <div className="flex">
            <span className="flex gap-2 font-bold text-[1.2rem] text-[#0b3954] hover:text-[#087e8b]">
              {name}
            </span>
            <ChevronRight size={30} />{" "}
          </div>
        </Link>
        <p className="flex gap-2 font-bold text-[1.2rem] text-[#c81d25]">
          <BookOpen />
          {myTitle}
        </p>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Cover */}
        <div className="md:w-1/3">
          <img
            src={detail.image}
            alt={myType == "cartoon" ? detail.book_title : detail.ct_title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Book Details */}
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">{myTitle}</h1>
          <p className="text-lg mb-4">
            by{" "}
            <a href="#" className="text-blue-500 hover:underline">
              {myType == "cartoon" ? detail.ct_creator : detail.book_author}
            </a>
          </p>
          <p>
            {myType == "cartoon"
              ? `${detail.view_count} | ${detail.published_year.substring(
                  0,
                  4
                )}`
              : ""}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {myType == "cartoon" ? detail.ct_description : detail.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
