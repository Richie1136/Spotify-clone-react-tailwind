import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { DetailsHeader, Error, Loader, RelatedSongs } from "../../components"
import { setActiveSong, playPause } from "../../redux/features/playerSlice"

const SongDetails = () => {

  const dispatch = useDispatch()
  const params = useParams()

  const obj = new URLSearchParams(params)

  const term = obj.get('songid')
  console.log(term)

  const { activeSong, isPlaying } = useSelector((state) => state.player)


  return (
    <div className="flex flex-col">
      <DetailsHeader />
    </div>
  )
}

export default SongDetails