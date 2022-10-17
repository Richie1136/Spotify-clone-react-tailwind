import { NavLink } from "react-router-dom"
import PlayPause from "../playpause/PlayPause"

const SongBar = ({ song, index, artistId, isPlaying, activeSong, handlePlay, handlePause }) => {
  return (
    <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer `}>SongBar</div>
  )
}

export default SongBar