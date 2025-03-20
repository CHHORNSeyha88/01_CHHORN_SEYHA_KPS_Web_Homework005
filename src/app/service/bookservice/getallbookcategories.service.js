
// book category
export const getAllBookCategories = async () =>{
    try{
        const res = await fetch("https://nextjs-homework005.vercel.app/api/book_category");
        const data = res.json();
        return data;
    }catch(error){
        console.log(error);
        
    }

}