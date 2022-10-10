import { NavLink } from "react-router-dom"
import { links } from "../../assets/constants"

const NavLinks = () => {
  return (
    <div className="mt-10">
      {links.map((link) => (
        <NavLink key={link.name} to={link.to} className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400">
          {link.name}
        </NavLink>
      ))}
    </div>
  )
}

export default NavLinks