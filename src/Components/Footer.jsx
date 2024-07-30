import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Icons/Logo_Panaderia.png'

const Footer = () => {
  return (
    <footer>
      <Link to='/' className=''>
        <img src={Logo} alt="Logo Panadería Josefina" />
      </Link>
    </footer>
  )
}

export default Footer