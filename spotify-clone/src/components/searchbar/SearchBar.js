import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {

  const navigate = useNavigate()

  const [term, setTerm] = useState("")

  const handleInput = (event) => {
    setTerm(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    navigate(`/search/${term}`)
    setTerm("")
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
      <label htmlFor="search field" className="sr-only">Search All Songs</label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-6 h-6 ml-4" />
        <input className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4" name="Search Field" autoComplete="off" id='search field' placeholder="Search" type='search' value={term} onChange={handleInput} />
      </div>
    </form>
  )
}

export default SearchBar