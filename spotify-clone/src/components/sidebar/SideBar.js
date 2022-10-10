import { useState } from "react"
import { RiCloseLine } from 'react-icons/ri'
import musicLogo from '../../assets/music-logo.jpeg'
import NavLinks from "../navlinks/NavLinks"
import { HiOutlineMenu } from "react-icons/hi"


const SideBar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img className="w-full h-14 object-contain" src={musicLogo} alt='logo' />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {isMobileMenuOpen ? <RiCloseLine /> : <HiOutlineMenu />}
      </div>
    </>
  )
}

export default SideBar