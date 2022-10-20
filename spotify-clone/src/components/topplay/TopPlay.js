import { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper"
import { playPause, setActiveSong } from "../../redux/features/playerSlice"
import { useGetTopChartsQuery } from '../../redux/services/shazamCore'
import TopChartCard from "../topchartcard/TopChartCard"

import 'swiper/css'
import 'swiper/css/free-mode'

const TopPlay = () => {

  const dispatch = useDispatch()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data } = useGetTopChartsQuery()
  const divRef = useRef(null)

  const topPlays = data?.slice(0, 5)

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' })
  })

  const handlePause = () => {
    dispatch(playPause(false))
  }

  const handlePlay = (song, index) => {
    dispatch(setActiveSong({ song, data, index }))
    dispatch(playPause(true))
  }

  return (
    <div className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col" ref={divRef}>
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <NavLink to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </NavLink>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, index) => (
            <TopChartCard key={song.key} song={song} index={index} isPlaying={isPlaying} activeSong={activeSong} handlePause={handlePause} handlePlay={() => handlePlay(song, index)} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <NavLink to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </NavLink>
        </div>
        <Swiper className="mt-4" slidesPerView="auto" spaceBetween={15} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]}>
          {topPlays?.map((artist) => (
            <SwiperSlide className="shadow-lg rounded-full animate-slideright" key={artist?.key} style={{ width: '25%', height: 'auto' }}>
              <NavLink to={`/artists/${artist?.artists[0].adamid}`}>
                <img className="rounded-full w-full object-cover" src={artist?.images.background} alt="name" />
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TopPlay