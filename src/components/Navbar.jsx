import dayjs from "dayjs"
import { navIcons, navLinks } from "../constants"

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Seif's Portfolio</p>
        <ul>
          {
            navLinks.map(link => (
              <li key={link.id}>{link.name}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <ul>
          {
            navIcons.map(icon => (
              <li key={icon.id}>
                <img src={icon.img} alt={`img-${icon.id}`} className="icon-hover" />
              </li>
            ))
          }
        </ul>
        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  )
}

export default Navbar 