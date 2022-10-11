
const TopChartCard = ({ song, index }) => {
  return (
    <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
      {song.title}
    </div>
  )
}

export default TopChartCard