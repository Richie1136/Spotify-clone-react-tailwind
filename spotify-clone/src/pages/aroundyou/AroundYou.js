import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { Error, Loader, SongCard } from "../../components"

const AroundYou = () => {
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)

  const { activeSong, isPlaying } = useSelector((state) => state.player)


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



  return (
    <div>AroundYou</div>
  )
}

export default AroundYou