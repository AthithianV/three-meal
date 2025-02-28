import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRecipes, recipesSelector } from "../../store/reducers/recipes.reducer";
import { AppDispatch } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import Picture from "./Picture";
import Cuisine from "./Cuisine";
import capitalize from "../../utils/textFormatter";


const Recipes = () => {

    const { recipes } = useSelector(recipesSelector);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(()=>{
        // dispatch(getRecipes());
    }, [])

  return (
    <div className="p-4 px-10 mx-sm:p-2 flex-center">
    <ul className="recipes">
       {
        recipes.map((rcp, index)=>(
            <li key={index} className="recipe-item shadow">
                
                <h3 className="my-2 font-semibold text-violet-700">{capitalize(rcp.recipe.mealType[0])}</h3>
                
                <Picture url={rcp.recipe.image} calories={rcp.recipe.calories}/>

                <h4 className="my-2 font-semibold text-md">{rcp.recipe.label}</h4>
                <div className="flex justify-between items-center">
                    <div className="my-4 text-gray-300 text-lg flex-center gap-4 w-fit">
                        <FontAwesomeIcon icon={faHeart} className="hover:text-gray-400"/>
                        {/* <FontAwesomeIcon icon={faShare} className="hover:text-gray-400"/> */}
                    </div>
                    {rcp.recipe.cuisineType.length>0 && <Cuisine title={rcp.recipe.cuisineType[0]}/>}
                </div>
            </li>
        ))
       } 
    </ul>
    </div>
  )
}

export default Recipes;


