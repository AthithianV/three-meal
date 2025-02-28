import capitalize from "../../utils/textFormatter"

const Label = ({title}:{title:string}) => {
  return (
    <div>
        <span className="text-xs border w-fit py-1 font-semibold px-3 rounded-full text-violet-500">
            {capitalize(title)}
        </span>
    </div>
  )
}

export default Label;