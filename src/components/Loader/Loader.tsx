import { BeatLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='h-[var(--body-height)] flex-center bg-transparent'>
        <BeatLoader color='#7C3AED' size={20}/>
    </div>
  )
}

export default Loader