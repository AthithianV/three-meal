import { useDispatch, useSelector } from "react-redux"
import { recipesActions, recipesSelector } from "../store/reducers/recipes.reducer"
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AppDispatch } from "../store/store";
import Header from "../components/RecipeView/Header";
import Nutrients from "../components/RecipeView/Nutrients";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faLink } from "@fortawesome/free-solid-svg-icons";

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
        <Link 
            to={selectedRecipe.url} 
            className="rounded-xl p-5 bg-white border flex items-center gap-1 text-sky-500"
            target="_blank" 
            rel="noopener noreferrer">
            <span>Instruction</span>
            <FontAwesomeIcon icon={faLink}/>
        </Link>
        <div className="rounded-xl p-5 bg-white border flex items-center gap-1 text-red-500 font-semibold">
            <FontAwesomeIcon icon={faFire}/>
            <span>Calories: {Math.floor(selectedRecipe.calories)}Kcal</span>
        </div>
        <Nutrients nutrients={selectedRecipe.totalNutrients}/>
    </div>
  )
}

export default RecipeView;