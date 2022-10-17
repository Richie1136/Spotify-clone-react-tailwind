import { NavLink } from "react-router-dom"
import PlayPause from "../playpause/PlayPause"

const SongBar = ({ song, index, artistId, isPlaying, activeSong, handlePlay, handlePause }) => {
  return (
    <div className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer`}>
      <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img className="w-20 h-20 rounded-lg" src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') : song?.images?.coverart} alt={song?.title} />
        <div className='flex-1 flex flex-col justify-center mx-3'>
          {!artistId ? (
            <NavLink to={`/songs/${song.key}`}>
              <p className="text-xl font-bold text-white">
                {song?.title}
              </p>
            </NavLink>
          ) : (
            <p className="text-xl font-bold text-white">
              {song?.attributes?.name}
            </p>
          )}
          <p className="text-base text-gray-300 mt-1">
            {artistId ? song?.attributes?.albumName : song?.subtitle}
          </p>
        </div>
      </div>
      {!artistId ? (
        <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePlay={() => handlePlay(song, index)} handlePause={handlePause} />
      ) : null}
    </div>
  )
}

export default SongBar