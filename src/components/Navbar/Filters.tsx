import { useDispatch, useSelector } from "react-redux";
import { recipesActions, recipesSelector } from "../../store/reducers/recipes.reducer";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import capitalize from "../../utils/textFormatter";

const mealTypeFilters = [
  {title: "Any", type: "Any"},
  {title: "Breakfast", type: "breakfast"},
  {title: "Lunch", type: "lunch"},
  {title: "Dinner", type: "dinner"},
  {title: "Snack", type: "Snack"},
  {title: "TeaTime", type: "TeaTime"},
];

const dietTypeFilters = [
  {title: "balanced", type: "balanced"},
  {title: "high-protein", type: "high-protein"},
  {title: "low-fat", type: "low-fat"},
  {title: "low-carb", type: "low-carb"},
  {title: "low-sodium", type: "low-sodium"},
]

const Filters = ({name}:{name:string}) => {

    const dispatch = useDispatch<AppDispatch>();
    const [dropdown, setDropdown] = useState(false);
    const {mealTypeFilter, dietTypeFilter} = useSelector(recipesSelector);
    const dropdownRef = useRef<HTMLDivElement|null>(null);
    const navigate = useNavigate();

    // Handling Click Outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    // setting filter to the state
    const setFilter = (type:string)=>{
      dispatch(recipesActions.setFilter({type,name}));
      setDropdown(false);
      navigate("/recipes");      
    }

    const getBGClass = (type: string) => {
      if (name === "Meal Type") {
        return type === mealTypeFilter ? "bg-gray-200" : "hover:bg-gray-100";
      } else {
        return type === dietTypeFilter ? "bg-gray-200" : "hover:bg-gray-100";
      }
    };

  return (
    <div>
      <div 
      ref={dropdownRef}
      className={`py-2 px-4 rounded relative flex-center gap-2 cursor-pointer ${dropdown?"bg-gray-100 border":"bg-gray-50 border"}`} 
      onClick={()=>setDropdown(prev=>!prev)}>
        <span>{capitalize(name.toLowerCase())}</span>
        <FontAwesomeIcon icon={dropdown?faAngleUp:faAngleDown}/>

        {dropdown && 
        <ul 
        className="flex-center shadow flex-col gap-2 font-semibold max-xl:gap-1 z-20 max-xl:text-sm bg-white absolute top-12 border rounded p-2 min-w-44">
        {
            (name==="Meal Type"?mealTypeFilters:dietTypeFilters).map((item, index)=>(
                <li 
                    key={index}
                    className={`py-2 px-4 max-md:px-2 w-full max-md:py-1 rounded cursor-pointer border-b ${getBGClass(item.type)}`}
                    onClick={()=>setFilter(item.type)}>
                        {item.title}
                </li>
            ))
        }
      </ul>}
      </div>
      
    </div>
  )
}

export default Filters;