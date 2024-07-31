import React from 'react'
import { Link } from 'react-router-dom'

const ContactHome_section3 = () => {
  return (
    <section className='contactHome'>
      <div>
        <h2>¿Tienes algún pedido?</h2>
        <h3>Contáctanos</h3>
        {/* "Contáctanos" tienen qeu ser en otro color, para que contaste */}
        <Link to='/contact'>
          <button className='heroButton'>Contáctanos</button>
        </Link>
      </div>
    </section>
  )
}

export default ContactHome_section3