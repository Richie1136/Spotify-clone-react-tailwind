import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper"
import PlayPause from "../playpause/PlayPause"
import { playPause, setActiveSong } from "../../redux/features/playerSlice"
import { useGetTopChartsQuery } from '../../redux/services/shazamCore'

import 'swiper/css'
import 'swiper/css/free-mode'


const TopPlay = () => {

  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data } = useGetTopChartsQuery()
  const divRef = useRef(null)

  const TopPlays = data?.slice(0, 5)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smoooth' })
  })



  const handlePause = () => {
    dispatch(playPause(false))
  }

  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, index }))
    dispatch(playPause(true))
  }

  return (
    <div className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col" ref={divRef}>TopPlay</div>
  )
}

export default TopPlay