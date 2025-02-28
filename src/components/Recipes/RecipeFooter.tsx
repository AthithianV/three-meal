import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from './Label'

const RecipeFooter = ({cuisine}:{cuisine: string[]}) => {
  return (
    <div className="flex justify-between items-center">
        <div className="my-4 text-gray-300 text-lg flex-center gap-4 w-fit">
            <FontAwesomeIcon icon={faHeart} className="hover:text-gray-400"/>
        </div>
        {cuisine.length>0 && <Label title={cuisine[0]}/>}
    </div>
  )
}

export default RecipeFooter