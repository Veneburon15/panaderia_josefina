import {  NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navBar'>
        {/* <Link to='/' className='logoDiv'>
            <img src={Logo} alt="Logo Allxskills" />
        </Link> */}
        <ul className=''>
            <li >
                <NavLink to='/' className='navFont' > Home </NavLink>
            </li>
            <li >
                <NavLink to='/contact' className='navFont'> Contacto </NavLink>
            </li>
            {/* <li >
                <NavLink to='/SoftSkills' className='navFont' onClick={handleClick}> ¿Por qué Soft Skills? </NavLink>
            </li>
            <li >
                <NavLink to='/Contactanos' className="contactButton" onClick={handleClick}> Contáctanos </NavLink>
            </li> */}
        </ul>
    </nav>
  )
}

export default Navbar