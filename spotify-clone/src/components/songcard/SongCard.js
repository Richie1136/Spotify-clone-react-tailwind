import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { playPause, setActiveSong } from "../../redux/features/playerSlice"
import PlayPause from '../playpause/PlayPause'


const SongCard = ({ song, index, isPlaying, activeSong, data }) => {

  console.log(song)

  const dispatch = useDispatch()


  const handlePause = () => {
    dispatch(playPause(false))
  }

  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, index }))
    dispatch(playPause(true))
  }

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause song={song} handlePause={handlePause} handlePlay={handlePlay} isPlaying={isPlaying} activeSong={activeSong} />
        </div>
        <img src={song.images.coverart} alt="song" />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white">
          <NavLink to={`/songs/${song?.key}`}>
            {song.title}
          </NavLink>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <NavLink to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </NavLink>
        </p>
      </div>
    </div>
  )
}

export default SongCard