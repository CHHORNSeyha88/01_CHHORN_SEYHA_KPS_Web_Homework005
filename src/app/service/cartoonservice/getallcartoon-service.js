export const getAllCartoons = async () => {
    try {
      // Fetch data from the API
      const res = await fetch(`
        https://nextjs-homework005.vercel.app/api/cartoon?search=
        `);
      const data = await res.json(); // or const {payload } = await res.json(); ( destructuring)
      return data;
    } catch (error) {
      console.error("Error fetching books:", error);
  
      throw error;
    }
  };
  // const res = await fetch("https://nextjs-homework005.vercel.app/api/cartoon");


export const getCartoonByGenreId= async(id)=>{
try{
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?genre=${id}`)
  const data = await res.json();
  return data;
}
catch(e){
  console.log(e);
  
}
}

export const getCartoonByTitle= async(title)=>{
  try{
    const res = await fetch(`
https://nextjs-homework005.vercel.app/api/cartoon?search=${title}`)
    const data = await res.json();
    return data;
  }
  catch(e){
    console.log(e);
    
  }
  }
  
