import { NavLink } from "react-router-dom"
import { links } from "../../assets/constants"

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10">
      {links.map((link) => (
        <NavLink key={link.name} to={link.to} onClick={() => handleClick && handleClick()} className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400">
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

export default NavLinks