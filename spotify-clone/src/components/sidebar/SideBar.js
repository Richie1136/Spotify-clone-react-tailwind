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
        {isMobileMenuOpen ? <RiCloseLine onClick={() => setIsMobileMenuOpen(false)} className="w-6 h-6 text-white mr-2" /> : <HiOutlineMenu onClick={() => setIsMobileMenuOpen(true)} className="h-6 w-6 text-white mr-2" />}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] 
      backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${isMobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img className="w-full h-14 object-contain" src={musicLogo} alt='logo' />
        <NavLinks handleClick={() => setIsMobileMenuOpen(false)} />
      </div>
    </>
  )
}

export default SideBar