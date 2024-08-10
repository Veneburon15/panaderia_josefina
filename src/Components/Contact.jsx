import React from 'react'

const ContactComponent = () => {
  return (
    <section className='contact'>
      <h2>¿Tenes alguna pregunta?</h2>
      <div className='container'>
        <div className='headerContainer'>
          <h3>Contáctanos</h3>
          <div className='socialMedia'>
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <span className='decorationSpan'></span>
        <div className='visitUs'>
          <h3>O visítanos</h3>
          <p>Todos los días</p>
          <p>Desde las 6:30hs hasta las 20hs</p>
        </div>
      </div>
    </section>
  )
}

export default ContactComponent