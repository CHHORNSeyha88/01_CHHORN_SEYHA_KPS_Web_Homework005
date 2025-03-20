import SelectComponent from './BookCategoriesSelectionComponent';
import { getAllBookCategories } from '../service/bookservice/getallbookcategories.service';
import { getAllBooks } from '../service/bookservice/book-service';

const SelectDataComponent = async () => {
  const data = await getAllBookCategories();
  const bookCategories = data.payload || [];
  const getBook= await getAllBooks()
  const bookList = getBook.payload  || [] ;


  return <SelectComponent bookCategories={bookCategories} bookList={bookList} />;
};

export default SelectDataComponent;
