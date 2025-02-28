import { useDispatch } from "react-redux"
import { recipesActions } from "../../store/reducers/recipes.reducer";
import { useEffect, useState } from "react";

const SearchInput = () => {

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  // SetKeyword is call only after delay of 500, reducing load on server
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (keyword) {
        dispatch(recipesActions.setKeyword(keyword));
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [keyword, dispatch]);

  return (
    <input 
      className="search-bar max-lg:w-[250px] max-md:w-[150px] p-2 px-5 max-md:px-2 max-md:py-1 border" 
      type="text" 
      placeholder="Search by Keywords and Ingredients"
      onChange={(e)=>setKeyword(e.target.value)}
    />
  )
}

export default SearchInput