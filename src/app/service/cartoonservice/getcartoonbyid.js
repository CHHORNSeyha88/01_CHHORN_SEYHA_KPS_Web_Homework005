export const getCartoonById = async (cartoonId) => {
    try {
      const res = await fetch(
        `https://nextjs-homework005.vercel.app/api/cartoon/${cartoonId}`
      );
        const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching cartoon data:", error);
      throw error;
    }
  };