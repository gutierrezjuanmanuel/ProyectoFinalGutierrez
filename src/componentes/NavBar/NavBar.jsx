import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logoMarolio' src={"../img/logoguitarra.jpg"} alt="Logo Marolio" />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="categoria/2">Cuerda</NavLink>
          </li>

          <li>
            <NavLink to="categoria/3">Viento</NavLink>
          </li>
          
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar