import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Icons/Logo_Panaderia.png'

const Navbar = () => {
  return (
    <header>
        <nav className='navBar'>
            <div className='navRightDiv'>
                <Link to='/' className='backToHome'>
                    <img src={Logo} alt="Logo Panadería Josefina" className='logo' />
                    <h2 className='bakeryHeader'>Panadería Josefina</h2>
                </Link>
            </div>
            <ul className=''>
                <li >
                    <NavLink to='/' className='navText' > Home </NavLink>
                </li>
                <li >
                    <NavLink to='/lunchService' className='navText' > Lunch Service </NavLink>
                </li>
                <li >
                    <NavLink to='/contact' className='navText contactLink'> Contacto </NavLink>
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