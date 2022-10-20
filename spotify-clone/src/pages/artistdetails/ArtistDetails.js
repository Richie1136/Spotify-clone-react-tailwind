import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { DetailsHeader, Error, Loader, RelatedSongs } from "../../components"
import { useGetArtistDetailsQuery } from "../../redux/services/shazamCore"

const ArtistDetails = () => {

  const { id: artistid } = useParams()

  const obj = new URLSearchParams(artistid)

  const term = obj.get('artistid')

  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const { data: artistData, isFetching, error } = useGetArtistDetailsQuery(artistid)

  if (isFetching) return <Loader title="Loading artist details" />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistid} artistData={artistData} />
      <RelatedSongs artistId={artistid} data={Object.values(artistData?.songs)} isPlaying={isPlaying} activeSong={activeSong} />
    </div>
  )
}

export default ArtistDetails