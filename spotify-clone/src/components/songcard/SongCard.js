import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { playPause, setActiveSong } from "../../redux/features/playerSlice"
import PlayPause from '../playpause/PlayPause'


const SongCard = ({ song, index }) => {
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <h2>{song.title}</h2>
    </div>
  )
}

export default SongCard