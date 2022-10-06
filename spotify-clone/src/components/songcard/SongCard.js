import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux"
import { playPause, setActiveSong } from "../../redux/features/playerSlice"
import PlayPause from '../playpause/PlayPause'


const SongCard = ({ song }) => {
  return (
    <div>
      <h2>{song.title}</h2>
    </div>
  )
}

export default SongCard