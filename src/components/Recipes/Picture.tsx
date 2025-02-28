import { faFire } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Picture = ({url, calories}:{url:string, calories:number}) => {
  return (
    <div className="relative">
        <div className="flex-center gap-2 w-fit text-xs bg-[rgba(255,255,255,0.9)] py-1 px-3 font-semibold rounded-full absolute right-2 top-2">
            <FontAwesomeIcon icon={faFire} className="text-red-500"/>
            <span>{Math.floor(calories)}</span>
        </div>
        <div className="min-h-[150px] bg-gray-200 rounded-xl">
          <img src={url} alt={"recipe-image"} className="w-[100%] rounded-xl"/>
        </div>
    </div>
  )
}

export default Picture