import { NavLink } from "react-router-dom"

const DetailsHeader = ({ artistId, songData, artistData }) => {

  console.log(artistData)
  console.log(songData)

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" src={artistId ? artistData?.artists[artistId].attributes?.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart} alt='art' />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artistData?.artists[artistId].attributes.name : songData?.title}</p>
          {!artistId && (
            <NavLink to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
            </NavLink>
          )}
          <p className="text-base text-gray-400 mt-2">
            {artistId ? artistData?.artists[artistId].attributes?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  )
}

export default DetailsHeader