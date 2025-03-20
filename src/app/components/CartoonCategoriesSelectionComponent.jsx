"use client";

import React from "react";
import { useRouter } from "next/navigation";

const CartoonCategoriesSelectionComponent = ({ cartoonGenres }) => {
  const router = useRouter();

  // Handle category selection
  const handleSelectCategory = (e) => {
    const query = e.target.value;
    router.push(`/old-school-cartoons/?query=${query}`);
  };

  return (
    <>
      <form>
        <div className="relative">
          <select
            onChange={handleSelectCategory}
            id="category"
            defaultValue="" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {/* Default option */}
            <option value="" disabled>
              Select a Category
            </option>

            {/* Dynamically render  */}
            {cartoonGenres.map((cartoonGenre) => (
              <option key={cartoonGenre.id} value={cartoonGenre.id}>
                {cartoonGenre.cartoon_genre}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
};

export default CartoonCategoriesSelectionComponent;