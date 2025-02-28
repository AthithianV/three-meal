import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSelector } from "react-redux"
import { recipesSelector } from "../../store/reducers/recipes.reducer"

const Pagenation = () => {

    const {page, more} = useSelector(recipesSelector);



  return (
    <div className='my-5 flex-center gap-2'>
        <button 
            className={`${page!==1?"bg-violet-600":"bg-violet-300"} text-white rounded px-2 py-1`}
            disabled={page===1}
        >
            <FontAwesomeIcon icon={faCaretLeft}/>
        </button>
        <span>{page}</span>
        <button 
            className={`${more?"bg-violet-600":"bg-violet-300"} text-white rounded px-2 py-1`}
            disabled={!more}>
                <FontAwesomeIcon icon={faCaretRight}/>
        </button>
    </div>
  )
}

export default Pagenation