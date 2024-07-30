import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Icons/Logo_Panaderia.png'

const Navbar = () => {
  return (
    <header>
        <nav className='navBar'>
            <div>
                <Link to='/' className=''>
                    <img src={Logo} alt="Logo Panadería Josefina" />
                </Link>
                <h2>Panadería Josefina</h2>
            </div>
            <ul className=''>
                <li >
                    <NavLink to='/' className='' > Home </NavLink>
                </li>
                <li >
                    <NavLink to='/lunhcService' className='' > Lunch Service </NavLink>
                </li>
                <li >
                    <NavLink to='/contact' className=''> Contacto </NavLink>
                </li>
                {/* <li >
                    <NavLink to='/Contactanos' className="contactButton" > Contáctanos </NavLink>
                </li> */}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar