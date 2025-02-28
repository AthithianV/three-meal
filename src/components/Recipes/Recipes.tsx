import { useSelector } from "react-redux"
import { recipesSelector } from "../../store/reducers/recipes.reducer";
import Picture from "./Picture";
import capitalize from "../../utils/textFormatter";
import RecipeFooter from "./RecipeFooter";
import Filters from "../Navbar/Filters";

const Recipes = () => {

    const { recipes } = useSelector(recipesSelector);

  return (
    <div className="px-10 min-h-[var(--body-height)]">
      <div className="hidden max-md:block mb-5">
        <Filters/>
      </div>
      <div className="mx-sm:p-2 flex-center">
        {
        recipes && recipes.length>0 ?
          <ul className="recipes">
            {
            recipes.map(({recipe}, index)=>(
                  <li key={index} className="recipe-item shadow">
                      
                      <h3 className="my-2 font-semibold text-violet-700">{capitalize(recipe.mealType[0])}</h3>
                      
                      <Picture url={recipe.image} calories={recipe.calories}/>

                      <h4 className="my-2 font-semibold text-md">{recipe.label}</h4>
                      <RecipeFooter cuisine={recipe.cuisineType}/>
                  </li>
              ))
            } 
          </ul>
          :<div className="h-full flex-center text-xl gap-2">
            <h2>😔 No Recipes Found</h2>
          </div>
        }
      </div>
    </div>
  )
}

export default Recipes;


