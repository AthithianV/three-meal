import { useDispatch } from "react-redux"
import { recipesActions } from "../../store/reducers/recipes.reducer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  // SetKeyword is call only after delay of 500, reducing load on server
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (keyword) {
        dispatch(recipesActions.setKeyword(keyword));
        navigate("/recipes");
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [keyword, dispatch]);

  return (
    <input 
      className="search-bar max-lg:w-[250px] max-md:w-[180px] p-2 px-5 max-md:px-2 max-md:py-1 border" 
      type="text" 
      placeholder="Search by Keywords and Ingredients"
      onChange={(e)=>setKeyword(e.target.value)}
    />
  )
}

export default SearchInput