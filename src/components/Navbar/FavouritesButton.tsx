import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FavouritesButton = () => {
  return (
    <div className="py-2 px-4 max-md:px-2 rounded-full bg-violet-600">
      <Link to={"/recipes/favourites"} className="flex-center gap-2 font-semibold text-white">
        <FontAwesomeIcon icon={faHeart}/>
        <span className="max-md:hidden">Favourites</span>
      </Link>
    </div>
  )
}

export default FavouritesButton;