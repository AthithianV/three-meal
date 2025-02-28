import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FavouritesButton = () => {
  return (
    <div className="flex-center gap-2 py-2 px-4 rounded-full bg-violet-600 font-semibold text-white">
        <FontAwesomeIcon icon={faHeart}/>
        <span>Favourites</span>
    </div>
  )
}

export default FavouritesButton