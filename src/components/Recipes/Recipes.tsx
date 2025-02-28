import { useSelector } from "react-redux"
import { recipesSelector } from "../../store/reducers/recipes.reducer";
import Filters from "../Navbar/Filters";
import Pagenation from "./Pagenation";
import RecipesItem from "./RecipesItem";

const Recipes = () => {

    const { recipes } = useSelector(recipesSelector);

  return (
    <div className="px-10 min-h-[var(--body-height)]">
      <div className="hidden max-md:flex mb-5 flex-center gap-2">
        <Filters name={"Meal Type"}/>
        <Filters name={"Diet Type"}/>
      </div>
      <div className="mx-sm:p-2 flex-center">
        {
        recipes && recipes.length>0 ?
          <div>
            <ul className="recipes">
              {
              recipes.map((recipe, index)=>(
                    <RecipesItem
                      dietLabels={recipe.dietLabels}
                      key={index} 
                      imageUrl={recipe.image}
                      id={recipe.id}
                      mealType={recipe.mealType[0]}
                      calories={recipe.calories}
                      label={recipe.label}
                      cuisine={recipe.cuisineType}
                    />
                ))
              } 
            </ul>
            <Pagenation/>
          </div>
          :<div className="h-full flex-center text-xl gap-2">
            <h2>😔 No Recipes Found</h2>
          </div>
        }

      </div>
    </div>
  )
}

export default Recipes;


