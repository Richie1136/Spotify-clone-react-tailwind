import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { DetailsHeader, Error, Loader, RelatedSongs } from "../../components"

const SongDetails = () => {

  const params = useParams()

  const obj = new URLSearchParams(params)

  const term = obj.get('songid')
  console.log(term)

  return (
    <div>SongDetails</div>
  )
}

export default SongDetails