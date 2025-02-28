import { useDispatch, useSelector } from "react-redux";
import { getRecipes, recipesSelector } from "../store/reducers/recipes.reducer";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import Loader from "../components/Loader/Loader";
import Recipes from "../components/Recipes/Recipes";

const RecipesList = () => {

  const {loader, filter, keyword, page} = useSelector(recipesSelector);
  const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getRecipes({ keyword, filter, page }));
    }, [keyword, filter, page]);

  return (
    <div className="pt-5">
        {
            loader
            ?<Loader/>
            :<Recipes/>
        }
    </div>
  )
}

export default RecipesList