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


  return (
    <div>TopPlay</div>
  )
}

export default TopPlay