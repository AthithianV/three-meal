import capitalize from "../../utils/textFormatter"
import Label from "../Recipes/Label"

type PropType = {
    image: string,
    label: string,
    ingredients: string[],
    healthLabels: string[],
    mealType: string
}

const Header = ({image, label, ingredients, healthLabels, mealType}:PropType) => {
  return (
    <div className="p-5 rounded-xl bg-white border flex-center gap-2 max-md:flex-col">
            <div>
                <img src={image} alt={label} className="rounded-lg"/>
            </div>
            <div className="flex-1 flex flex-col justify-start">
                <h2 className="py-1 font-semibold text-xl text-violet-600">{label} - {capitalize(mealType)}</h2>
                <div className="border-y p-2">
                    <h2 className="font-semibold py-2 underline">Ingredients:</h2>
                    <ul className="flex flex-col gap-2">
                        {
                            ingredients.map((ingredient:any, index:number)=>(
                                <li key={index} className="flex-center gap-2 w-fit font-semibold">   
                                    <img src={ingredient.image} alt={ingredient.text} className="h-10 w-10 rounded border"/>
                                    <span className="">{ingredient.text}</span> 
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="p-2">
                    <ul className="flex flex-wrap gap-1">
                        {
                            healthLabels.map((label:string, index:number)=>(
                                <Label title={label} key={index}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Header