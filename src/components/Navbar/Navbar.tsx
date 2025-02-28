import FavouritesButton from "./FavouritesButton";


const Navbar = () => {
  return (
    <div className='p-2 px-10 flex justify-between h-[var(--navbar-height)] '>
        <div className="flex-center w-fit gap-2 font-semibold text-lg">
          <img src="./breakfast.png" alt="logo" className="h-8 w-8"/>
          <h4>Three Meals</h4>
        </div>

        <div className="flex-center gap-4">
          <FavouritesButton/>
        </div>
    </div>
  )
}

export default Navbar;