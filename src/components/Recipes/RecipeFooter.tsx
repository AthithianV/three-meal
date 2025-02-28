import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Cuisine from './Cuisine'

const RecipeFooter = ({cuisine}:{cuisine: string[]}) => {
  return (
    <div className="flex justify-between items-center">
        <div className="my-4 text-gray-300 text-lg flex-center gap-4 w-fit">
            <FontAwesomeIcon icon={faHeart} className="hover:text-gray-400"/>
        </div>
        {cuisine.length>0 && <Cuisine title={cuisine[0]}/>}
    </div>
  )
}

export default RecipeFooter