import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Label from './Label'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { recipesActions, recipesSelector } from '../../store/reducers/recipes.reducer'
import { useEffect, useState } from 'react'

const RecipeFooter = ({cuisine, id}:{cuisine: string[], id:string}) => {

  const {favourites} = useSelector(recipesSelector);
  const dipatch = useDispatch<AppDispatch>();
  const [ isFavourite, setIsFavourite ] = useState(false);

  useEffect(()=>{
    const found = favourites.find(recipe=>recipe.id===id);
    if(found){
      setIsFavourite(true);
    }else{
      setIsFavourite(false);
    }
  },[favourites]);

  const toggleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dipatch(recipesActions.toggleFavourites(id));
  }

  return (
    <div className="flex justify-between items-center">
        <button 
          type='button'
          className="my-4 text-gray-300 text-lg flex-center gap-4 w-fit"
          onClick={(e)=>toggleAction(e)}
        >
            <FontAwesomeIcon icon={faHeart} className={`${isFavourite?"text-rose-400":"hover:text-gray-400"}`}/>
        </button>
        {cuisine.length>0 && <Label title={cuisine[0]}/>}
    </div>
  )
}

export default RecipeFooter