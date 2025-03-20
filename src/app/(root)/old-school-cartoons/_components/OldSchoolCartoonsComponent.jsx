import {
  getAllCartoons,
  getCartoonByGenreId,
  getCartoonByTitle,
} from "@/app/service/cartoonservice/getallcartoon-service";
import { Yaldevi } from "next/font/google";
import React from "react";
import Link from "next/link";
import { Eye } from "lucide-react";
import CartoonCategoriesSelectionComponent from "@/app/components/CartoonCategoriesSelectionComponent";
import { getAllCartoonGenres } from "@/app/service/cartoonservice/getallcartoongenre-service";
import { getBookByTitle } from "@/app/service/bookservice/book-service";

const OldSchoolCartoonsComponent = async ({ path }) => {
  const filterData = async () => {
    if (path.query) {
      const data = await getCartoonByGenreId(path.query);
      return data.payload;
    } else if (path.search) {
      const data = await getCartoonByTitle(path.search);
      return data.payload;
    } else {
      const data = await getAllCartoons();
      return data.payload;
    }
  };
  const cartoons = await filterData();

  const genres = await getAllCartoonGenres();
  const cartoonGenres = genres.payload;

  const splitYear = (year) => {
    return year?.split("-")[0] || year;
  };

  return (
    <>
      {/* Header */}
      <div className="sticky bg-white ">
        <div className="flex justify-between  items-center p-4 ">
          <button className="px-6 py-2 bg-gray-100 shadow font-bold text-[#087E8B] rounded-full">
            Old School Cartoons
          </button>
          <CartoonCategoriesSelectionComponent cartoonGenres={cartoonGenres} />
        </div>
        <hr className="text-[#087E8B]" />
      </div>

      <div className="container mt-10 h-0 mx-auto px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 gap-y-[8rem] ">
          {cartoons.length > 0 ? (
            cartoons.map((cartoon) => (
              <div
                key={cartoon.id}
                className=" w-[20rem] h-[28rem] shadow-lg transition-transform rounded-4xl transform hover:scale-105"
              >
                {/* Image Section */}
                <Link
                  href={{
                    pathname: `/read-full-article/${cartoon.id}`,
                    query: {
                      type: "cartoon",
                      name: "Old School Cartoon",
                      title: cartoon.ct_title,
                    },
                  }}
                >
                  <img
                    src={cartoon.image}
                    alt={cartoon.ct_title}
                    className="w-[20rem] h-[28rem] object-cover rounded-4xl"
                  />
                </Link>
                {/* Content Section */}
                <div className="p-4 w-[20rem]  ">
                  <h2 className="text-lg font-bold text-[#0b3954] mb-2">
                    {cartoon.ct_title}
                  </h2>
                  <p className="text-sm flex gap-1 font-bold  text-[#087E8B] text-[1.2rem]">
                    <Eye />
                    {cartoon.view_count} times |{" "}
                    {splitYear(cartoon.published_year)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No cartoons available.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default OldSchoolCartoonsComponent;
