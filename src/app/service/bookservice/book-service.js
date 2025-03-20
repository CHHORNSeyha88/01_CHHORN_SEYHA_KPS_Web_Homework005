
// -- Get All Books
export const getAllBooks = async () => {
   try {
     // Fetch data from the API
     const res = await fetch("https://nextjs-homework005.vercel.app/api/book");

     const data = await res.json();
 
     return data;
   } catch (error) {
     console.error("Error fetching books:", error);
 
     throw error;
   }
 };

 // -- Get Books By Id

 export const getBookById = async (bookId) =>{
 
try{
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${bookId}`);
  const data = await res.json();
  return data;
}catch(error){
  console.log(error); 
  
}
 }
export const getBookByCategoryId = async (id)=>{
  try{
const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?query=${id}`)
const data = await res.json();
return data;
  }catch(error){
    console.log(error.getMessage());
    
  }

}

export const getBookByTitle= async(title)=>{
  try{
  const res = await fetch(` https://nextjs-homework005.vercel.app/api/book?search=${title}`)
const data = await res.json();
return data;
  }catch(error){
    console.log(error.getMessage());
    
  }
 
}

 
