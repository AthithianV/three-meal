import FavouritesButton from "./FavouritesButton";
import SearchInput from "./SearchInput";
import logo from "../../assets/breakfast.png"
import Filters from "./Filters";


const Navbar = () => {
  return (
    <nav className='p-2 px-10 flex justify-between h-[var(--navbar-height)] sticky top-0 z-10 bg-white w-full shadow'>
        <div className="flex-center w-fit gap-2 font-semibold text-lg">
          <img src={logo} alt="logo" className="h-8 w-8"/>
          <h4 className="max-xl:hidden">Three Meals</h4>
        </div>

        <div className="flex-center gap-4 max-md:gap-2">
          <div className="max-md:hidden flex gap-2">
            <Filters name={"Meal Type"}/>
            <Filters name={"Diet Type"}/>
          </div>
          <SearchInput/>
          <FavouritesButton/>
        </div>
    </nav>
  )
}

export default Navbar;