import { useSelector } from 'react-redux'
import { recipesSelector } from '../store/reducers/recipes.reducer'
import RecipesItem from '../components/Recipes/RecipesItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Favourites = () => {

    const { favourites } = useSelector(recipesSelector);

  return (
    <div>
      <div className="px-10 min-h-[var(--body-height)]">
      <div className="hidden max-md:block mb-5">
      </div>
      <h1 className='font-semibold text-xl my-10 flex-center gap-2 text-rose-600'>
          <FontAwesomeIcon icon={faHeart}/>
          Favourites: 
      </h1>

      <div className="mx-sm:p-2 flex-center">
        
        {
       favourites &&favourites.length>0 ?
            <ul className="recipes">
              {
             favourites.map((recipe, index)=>(
                    <RecipesItem
                      key={index} 
                      imageUrl={recipe.image}
                      id={recipe.id}
                      mealType={recipe.mealType[0]}
                      calories={recipe.calories}
                      label={recipe.label}
                      cuisine={recipe.cuisineType}
                    />
                ))
              } 
            </ul>
          :<div className="h-full flex-center text-xl gap-2 mt-10 p-5 bg-white border rounded-xl">
            <h2>No Favourite Recipes</h2>
          </div>
        }

      </div>
    </div>
    </div>
  )
}

export default Favourites