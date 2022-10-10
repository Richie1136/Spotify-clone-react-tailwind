import { useState } from "react"
import { NavLink } from "react-router-dom"
import { RiCloseLine } from 'react-icons/ri'
import musicLogo from '../../assets/music-logo.jpeg'
import links from '../../assets/constants'
import NavLinks from "../navlinks/NavLinks"


const SideBar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img className="w-full h-14 object-contain" src={musicLogo} alt='logo' />
        <NavLinks />
      </div>
    </>
  )
}

export default SideBar