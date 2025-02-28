import { useDispatch, useSelector } from "react-redux";
import capitalize from "../../utils/textFormatter"
import { recipesActions, recipesSelector } from "../../store/reducers/recipes.reducer";
import { AppDispatch } from "../../store/store";

const filters = ["breakfast", "lunch", "dinner"];

const Filters = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {filter} = useSelector(recipesSelector);

  return (
    <div>
      <ul className="flex-center gap-2 font-semibold max-md:gap-1">
        {
            filters.map((flt, index)=>(
                <li 
                    key={index} 
                    className={`py-2 px-4 max-md:px-2 max-md:py-1 rounded-full cursor-pointer ${flt==filter?"bg-gray-200":"hover:bg-gray-100"}`}
                    onClick={()=>dispatch(recipesActions.setFilter(flt))}>
                        {capitalize(flt)}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Filters