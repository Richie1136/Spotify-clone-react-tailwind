import { NavLink } from "react-router-dom"
import PlayPause from "../playpause/PlayPause"

const TopChartCard = ({ song, index, isPlaying, activeSong, handlePause, handlePlay }) => {
  console.log(song)
  return (
    <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song?.title} />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <NavLink to={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </NavLink>
          <NavLink to={`/artists/${song?.artists[0].adamid}`}>
            <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
          </NavLink>
        </div>
      </div>
      <PlayPause isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlay={handlePlay} song={song} />
    </div>
  )
}

export default TopChartCard