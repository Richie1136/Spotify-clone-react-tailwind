import { useRef, useEffect } from 'react'


const Player = ({ activeSong, volume, isPlaying, seektime, repeat, onEnded, onTimeUpdate, onLoadedData }) => {

  const ref = useRef(null)

  if (ref.current) {
    if (isPlaying) {
      ref.current.play()
    } else {
      ref.current.pause()
    }
  }

  useEffect(() => {
    ref.current.volume = volume
  }, [volume])

  useEffect(() => {
    ref.current.currentTime = seektime
  }, [seektime])



  return (
    <audio src={activeSong?.hub?.actions[1].uri} ref={ref} loop={repeat} onEnded={onEnded} onTimeUpdate={onTimeUpdate} onLoadedData={onLoadedData} />
  )
}

export default Player