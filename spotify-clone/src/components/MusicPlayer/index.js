import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextSong, prevSong, playPause } from '../../redux/features/playerSlice'
import Controls from './Controls'
import Player from './Player'
import SeekBar from './SeekBar'
import Track from './Track'
import VolumeBar from './VolumeBar'

const MusicPlayer = () => {

  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } = useSelector((state) => state.player)
  const [duration, setDuration] = useState(0)
  const [seektime, setSeekTime] = useState(0)
  const [apptime, setAppTime] = useState(0)
  const [volume, setVolume] = useState(0.3)
  const [repeat, setRepeat] = useState(false)
  const [shuffle, setShuffle] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (currentSongs.length) dispatch(playPause(true))
  }, [currentIndex])

  const handlePlayPause = () => {
    if (!isActive) return
    if (isPlaying) {
      dispatch(playPause(false))
    } else {
      dispatch(playPause(true))
    }
  }

  const handleNextSong = () => {
    dispatch(playPause(false))
    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs.length))
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)))
    }
  }

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1))
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)))
    } else {
      dispatch(prevSong(currentIndex - 1))
    }
  }

  return (
    <div className='relative sm:px-12 px-0 w-full flex items-center justify-between'>
      <Track isPlaying={isPlaying} isActive={isActive} activeSong={activeSong} />
    </div>
  )
}

export default MusicPlayer