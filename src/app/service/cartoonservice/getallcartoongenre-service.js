export const getAllCartoonGenres = async () => {
    try {
      // Fetch data from the API
      const res = await fetch('https://nextjs-homework005.vercel.app/api/cartoon_genre');

      const data = await res.json();
  
      return data;
    } catch (error) {
      console.error("Error fetching cartoon genres:", error);
    }
  };