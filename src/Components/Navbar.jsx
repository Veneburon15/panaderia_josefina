import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Icons/Logo_Panaderia.png'


const Navbar = () => {
    const [pestaña, setPestaña] = useState("");

    useEffect (() => {
      document.title = `Panadería Josefina SRL ${pestaña}`
    }, [pestaña])
  
    const handleClick = (pestaña) => {
      setPestaña(pestaña);
    }

    return (
        <header>
            <nav className='navBar'>
                <div className='navRightDiv'>
                    <Link to='/' className='backToHome' onClick={() => handleClick('')}>
                        <img src={Logo} alt="Logo Panadería Josefina" className='logo' />
                        <h2 className='bakeryHeader'>Panadería Josefina</h2>
                    </Link>
                </div>
                <ul className=''>
                    <li >
                        <NavLink to='/' className='navText' onClick={() => handleClick('')}> Home </NavLink>
                    </li>
                    <li >
                        <NavLink to='/lunchService' className='navText' onClick={() => handleClick('- Lunch Service')}> Lunch Service </NavLink>
                    </li>
                    <li >
                        <NavLink to='/contact' className='navText contactLink' onClick={() => handleClick('- Contacto')}> Contacto </NavLink>
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