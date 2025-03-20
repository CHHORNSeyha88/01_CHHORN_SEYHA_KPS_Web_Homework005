import React from "react";

import {
  getAllBooks,
  getBookByCategoryId,
  getBookByTitle,
} from "@/app/service/bookservice/book-service";
import BookCategoriesSelectionComponent from "@/app/components/BookCategoriesSelectionComponent";
import { getAllBookCategories } from "@/app/service/bookservice/getallbookcategories.service";
import Link from "next/link";

const BookCategoriesComponent = async ({ path }) => {
  const filterData = async () => {
    if (path.query) {
      const data = await getBookByCategoryId(path.query);
      return data.payload;
    } else if (path.search) {
      const data = await getBookByTitle(path.search);
      return data.payload;
    } else {
      const data = await getAllBooks();
      return data.payload;
    }
  };
  const books = await filterData();

  const bookCategories = await getAllBookCategories();

  return (
    <>
      {/* Header */}
      <div className="sticky bg-white ">
        <div className="flex justify-between  items-center p-4 ">
          <button className="px-6 py-2 bg-gray-100 shadow font-bold text-[#087E8B] rounded-full">
            All Books
          </button>
          <BookCategoriesSelectionComponent bookCategories={bookCategories} />
        </div>
        <hr className="text-[#087E8B]" />
      </div>

      <article className="w-full grid grid-cols-2 h-0 mt-4">
        {books.map((books) => (
          <section
            key={books.id}
            className="w-full flex justify-center items-center mt-40"
          >
            <figure className="w-[460px] flex gap-8 justify-between items-end bg-gray-white rounded-3xl p-8 bg-[#f5f7f8] shadow">
              <figcaption className="relative">
                <img
                  src={books.image}
                  alt={books.book_title}
                  className="rounded-3xl absolute top-[-260px] w-[160px] h-[250px] object-cover"
                />
                <Link
                  href={{
                    pathname: `/read-full-article/${books.id}`,
                    query: {
                      type: "book",
                      name: "Book Category",
                      title: books.book_title,
                    },
                  }}
                >
                  <button className="bg-[#bfd7ea] text-[#087e8b] w-[180px] h-[40px] hover:bg-[#087e8b] hover:text-white  rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105">
                    READ FULL ARTICLE
                  </button>
                </Link>
              </figcaption>
              <div className="max-w-[230px] ">
                <h4 className="text-xl text-primary font-bold line-clamp-1">
                  {books.book_title}
                </h4>
                <p className="line-clamp-5 max-w-[200px]">
                  {books.description}
                </p>
              </div>
            </figure>
          </section>
        ))}
      </article>
    </>
  );
};

export default BookCategoriesComponent;
