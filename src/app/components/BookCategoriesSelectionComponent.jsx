'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const BookCategoriesSelectionComponent = ({ bookCategories }) => {
  const router = useRouter();

  // Handle category selection
  const handleSelectCategory = (e) => {
    const { value } = e.target;

    // Navigate to the selected category's query page
    router.push(`/book-categories/?query=${value}`);
  };

  return (
    <>
      <form>
        <div className="relative">
          <select
            id="category"
            defaultValue="" // Set the default selected value
            onChange={handleSelectCategory}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {/* Default option */}
            <option value="" disabled>
              Select a Category
            </option>

            {bookCategories.payload?.map((bookCategory) => (
              <option key={bookCategory.id} value={bookCategory.id}>
                {bookCategory.book_cate_name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </>
  );
};

export default BookCategoriesSelectionComponent;