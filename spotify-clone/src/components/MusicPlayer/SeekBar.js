
const SeekBar = ({ value, min, max, onInput, setSeekTime, apptime }) => {

  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`

  return (
    <div className="hidden sm:flex flex-row items-center">
      <button className="hidden lg:mr-4 lg:block text-white" type="button" onClick={() => setSeekTime(apptime - 1)}>
        -
      </button>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg" type="range" step="any" value={value} min={min} max={max} onInput={onInput} />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button className="hidden lg:ml-4 lg:block text-white" type="button" onClick={() => setSeekTime(apptime + 5)}>
        +
      </button>
    </div>
  )
}

export default SeekBar