import FavouritesButton from "./FavouritesButton";
import Filters from "./Filters";
import SearchInput from "./SearchInput";


const Navbar = () => {
  return (
    <nav className='p-2 px-10 flex justify-between h-[var(--navbar-height)] sticky top-0 z-10 bg-white w-full shadow'>
        <div className="flex-center w-fit gap-2 font-semibold text-lg">
          <img src="./breakfast.png" alt="logo" className="h-8 w-8"/>
          <h4 className="max-lg:hidden">Three Meals</h4>
        </div>

        <div className="flex-center gap-4 max-md:gap-2">
          <div className="max-md:hidden">
            <Filters/>
          </div>
          <SearchInput/>
          <FavouritesButton/>
        </div>
    </nav>
  )
}

export default Navbar;