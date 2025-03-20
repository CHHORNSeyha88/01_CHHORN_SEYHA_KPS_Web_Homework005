import React from 'react'
import OldSchoolCartoonsComponent from './_components/OldSchoolCartoonsComponent';

const OldSchoolCartoonsPage = async ({searchParams}) => {
  const path = await searchParams;

  return (
    <>
      <OldSchoolCartoonsComponent path={path}/>
    </>
  )
}

export default OldSchoolCartoonsPage;
