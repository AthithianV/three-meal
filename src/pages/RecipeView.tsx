import { useDispatch, useSelector } from "react-redux"
import { recipesActions, recipesSelector } from "../store/reducers/recipes.reducer"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../store/store";
import Header from "../components/RecipeView/Header";
import Nutrients from "../components/RecipeView/Nutrients";

const RecipeView = () => {

    const {selectedRecipe} = useSelector(recipesSelector);
    const dispatch = useDispatch<AppDispatch>();
    const {recipeId} = useParams();

    useEffect(()=>{
        dispatch(recipesActions.setSelectedRecipe(recipeId));
    }, []);

  return (
    selectedRecipe && <div className="w-[80%] mx-auto p-10 flex flex-col gap-5">
        <Header
             image={selectedRecipe.image}
             label={selectedRecipe.label}
             ingredients={selectedRecipe.ingredients}
             healthLabels={selectedRecipe.healthLabels}
             mealType={selectedRecipe.mealType[0]}
        />
        <Nutrients nutrients={selectedRecipe.totalNutrients}/>
    </div>
  )
}

export default RecipeView;