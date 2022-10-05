import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => {
  return (
    <div className='flex items-center justify-around md:w-16 lg:w-52 2xl:w-80'>
      <BsArrowRepeat className='hidden sm:block cursor-pointer' size={20} color={repeat ? 'red' : 'white'} onClick={() => setRepeat((prev) => !prev)} />
      {currentSongs?.length && <MdSkipPrevious className='cursor-pointer' size={30} color="#FFF" onClick={handlePrevSong} />}
      {isPlaying ? (
        <BsFillPauseFill className='cursor-pointer' size={45} color="#FFF" onClick={handlePlayPause} />
      ) : (
        <BsFillPlayFill className='cursor-pointer' size={45} color="#FFF" onClick={handlePlayPause} />
      )}
      {currentSongs?.length && <MdSkipNext className='cursor-pointer' size={30} color="#FFF" onClick={handleNextSong} />}
      <BsShuffle className='hidden sm:block cursor-pointer' size={20} color={shuffle ? 'red' : 'white'} onClick={() => setShuffle((prev) => !prev)} />
    </div>
  )
}

export default Controls