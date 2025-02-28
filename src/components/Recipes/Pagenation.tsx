import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useDispatch, useSelector } from "react-redux"
import { recipesActions, recipesSelector } from "../../store/reducers/recipes.reducer"

const Pagenation = () => {

    const {page, more} = useSelector(recipesSelector);
    const dispatch = useDispatch();

    function changePage(change:number){
        const newPage = page + change;
        if(newPage == 0 || !more){
            return;
        }
        dispatch(recipesActions.setPage(newPage));
    }

  return (
    <div className='my-5 flex-center gap-2'>
        <button 
            className={`${page!==1?"bg-violet-600":"bg-violet-300"} text-white rounded px-2 py-1`}
            disabled={page===1}
            onClick={()=>changePage(-1)}
        >
            <FontAwesomeIcon icon={faCaretLeft}/>
        </button>
        <span>{page}</span>
        <button 
            className={`${more?"bg-violet-600":"bg-violet-300"} text-white rounded px-2 py-1`}
            disabled={!more}
            onClick={()=>changePage(1)}
            >
                <FontAwesomeIcon icon={faCaretRight}/>
        </button>
    </div>
  )
}

export default Pagenation