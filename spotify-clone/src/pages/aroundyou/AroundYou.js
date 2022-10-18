import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Error, Loader, SongCard } from "../../components"
import { useGetSongsByCountryQuery } from "../../redux/services/shazamCore"

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)

  const { activeSong, isPlaying } = useSelector((state) => state.player)

  const { data, isFetching, error } = useGetSongsByCountryQuery(country)



  useEffect(() => {
    const getLocationData = async () => {
      try {
        const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_vh6PhPgmeOTSuuQY8BYWWuiVwxT7v`)
        const data = await response.json()
        setCountry(data?.location.country)
      } catch (error) {
        console.log(error)
      }
    }
    setLoading(false)
    getLocationData()
  }, [country])

  if (isFetching && loading) return <Loader title="Loading songs around you" />

  if (error && country) return <Error />

  return (
    <div className="flex flex-col">
      <h2>Around you</h2>
    </div>
  )
}

export default AroundYou