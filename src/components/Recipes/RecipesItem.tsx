import { Link } from "react-router-dom"
import capitalize from "../../utils/textFormatter"
import Picture from "./Picture"
import RecipeFooter from "./RecipeFooter"
import Label from "./Label"

type PropType = {
    imageUrl: string,
    id: string,
    mealType: string,
    cuisine: string[],
    calories:number,
    label: string,
    key: number,
    dietLabels: string[]
}

const RecipesItem = ({imageUrl, id, mealType, cuisine, calories, label, dietLabels}:PropType) => {
  return (
    <li className="recipe-item shadow w-[20%] max-xl:w-[30%] max-lg:w-[40%] max-md:w-[45%] max-sm:w-[100%]">
        <Link to={`${id}`}>
            <h3 className="my-2 font-semibold text-violet-700">{capitalize(mealType)}</h3>

            <div className="flex gap-2 my-2">
              {
                dietLabels.map((item, index)=><Label title={item} key={index}/>)
              }
            </div>
            
            <Picture url={imageUrl} calories={calories}/>

            <h4 className="my-2 font-semibold text-md">{label}</h4>
            <RecipeFooter cuisine={cuisine} id={id}/>
        </Link>
    </li>
  )
}

export default RecipesItem;