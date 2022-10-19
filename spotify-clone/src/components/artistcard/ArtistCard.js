import { useNavigate } from "react-router-dom"

const ArtistCard = ({ track }) => {

  const navigate = useNavigate()

  console.log(track)

  return (
    <div onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)} className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <img className="w-full h-56 rounded-full" src={track?.images?.coverart} alt='artist' />
      <p className="mt-4 text-white font-semibold text-lg truncate">{track?.subtitle}</p>
    </div>
  )
}

export default ArtistCard