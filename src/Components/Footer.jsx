import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/Icons/Logo_Panaderia.png'

const Footer = () => {
  return (
    <footer>
      <section className='leftSection'>
        <Link to='/'>
          <img src={Logo} alt="Logo Panadería Josefina" className='logo'/>
          <h2 className='bakeryHeader'>Panadería Josefina</h2>
        </Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ratione.</p>
      </section>
      <nav className='footerNav'>
        <ul className=''>
          <li >
            <NavLink to='/' className='footerNavText' > Home </NavLink>
          </li>
          <li >
            <NavLink to='/lunchService' className='footerNavText' > Lunch Service </NavLink>
          </li>
          <li >
            <NavLink to='/contact' className='footerNavText'> Contacto </NavLink>
          </li>
          {/* <li >
              <NavLink to='/Contactanos' className="contactButton" > Contáctanos </NavLink>
          </li> */}
        </ul>
      </nav>
      <section className='rightSection'>
        <h4>Síguenos en redes sociales</h4>
        <ul>
          {/* <li><a href='https://www.threads.net/@allxskills' target='_blank'><img src={Threads} alt="Threads Icon" className='footerIcon threads'/></a></li>
          <li><a href='https://www.instagram.com/allxskills/' target='_blank'><img src={Instagram} alt="Instagram Icon" className='footerIcon'/></a></li>
          <li><a href='https://www.linkedin.com/company/allxskills' target='_blank'><img src={LinkedIn} alt="LinkedIn Icon" className='footerIcon linkedIn'/></a></li>
          <li><a href='https://www.facebook.com/profile.php?id=61554981489091' target='_blank'><img src={Facebook} alt="Facebook Icon" className='footerIcon'/></a></li> */}
        </ul>
      </section>
    </footer>
  )
}

export default Footer