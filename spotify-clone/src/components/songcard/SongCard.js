import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { playPause, setActiveSong } from "../../redux/features/playerSlice"
import PlayPause from '../playpause/PlayPause'


const SongCard = ({ song, index }) => {

  console.log(song)

  const activeSong = "test"

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause />
        </div>
        <h2>{song.title}</h2>
        <img src={song.images.coverart} alt="song" />
      </div>
    </div>
  )
}

export default SongCard