import { Link } from 'react-router-dom'
import { Nav, NavList, Ul } from './style/NavBarStyle'

const NavBarTop = () => {

  return (

    <Nav>
      <Ul>
        <NavList>
          <Link to="/" >
            Home
              </Link>
        </NavList>
        <NavList>
          <Link to="/Ultimos-Lanzamientos" style={{ textDecoration: 'none', color: 'white' }}>
            Ultimos lanzamientos
              </Link>
        </NavList>
        <NavList>
          <Link to="/Populares" style={{ textDecoration: 'none', color: 'white' }}>
            Populares
              </Link>
        </NavList>
        <NavList>
          <Link to="/Buscar" style={{ textDecoration: 'none', color: 'white' }}>
            Buscar
          </Link>
        </NavList>
      </Ul>
    </Nav>

  )
}
export default NavBarTop
