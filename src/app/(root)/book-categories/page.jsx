import React from 'react'

import BookCategoriesComponent from './_components/BookCategoriesComponent';

const BookCategoriesPage = async ({searchParams}) => {
  const path = await searchParams;


  return (
    <>
    <BookCategoriesComponent path={path} />
    </>
  )
}

export default BookCategoriesPage;
