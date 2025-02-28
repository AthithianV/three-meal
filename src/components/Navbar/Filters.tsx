import { useDispatch, useSelector } from "react-redux";
import { recipesActions, recipesSelector } from "../../store/reducers/recipes.reducer";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";

const filters = [
  {title: "Any", type: "Any"},
  {title: "Breakfast", type: "breakfast"},
  {title: "Lunch", type: "lunch"},
  {title: "Dinner", type: "dinner"},
  {title: "Snack", type: "Snack"},
  {title: "TeaTime", type: "TeaTime"},
];

const Filters = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {filter} = useSelector(recipesSelector);
    const navigate = useNavigate();

    const setFilter = (type:string)=>{
      dispatch(recipesActions.setFilter(type));
      navigate("/recipes");
    }

  return (
    <div>
      <ul className="flex-center gap-2 font-semibold max-xl:gap-1 max-xl:text-sm">
        {
            filters.map((item, index)=>(
                <li 
                    key={index}
                    className={`py-2 px-4 max-md:px-2 max-md:py-1 rounded-full cursor-pointer ${((item.type==="Any" && !filter) || item.type===filter)?"bg-gray-200":"hover:bg-gray-100"}`}
                    onClick={()=>setFilter(item.type)}>
                        {item.title}
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Filters