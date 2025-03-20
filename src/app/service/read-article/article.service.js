
export const getArticleService = async (id , type) =>{
    try {
        const response = await fetch(`https://nextjs-homework005.vercel.app/api/${type}/${id}`);
        const {payload} = await response.json();
        return payload;
    } catch (error) {
        console.error(error);
    }
 
}