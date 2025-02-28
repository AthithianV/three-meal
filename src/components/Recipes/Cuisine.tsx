import capitalize from "../../utils/textFormatter"

const Cuisine = ({title}:{title:string}) => {
  return (
    <div>
        <span className="text-xs border w-fit py-1 text-violet-500 font-semibold px-3 rounded-full">
            {capitalize(title)}
        </span>
    </div>
  )
}

export default Cuisine