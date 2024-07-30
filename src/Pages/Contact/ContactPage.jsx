import React from 'react'

const ContactPage = () => {
  const phoneNumber = '+59896230343'; 

  return (
    <main className='contactoPage'>
      <section className='contactoMainSection'>
        <h2>¡Escríbenos Por WhatsApp!</h2>
        <p>Si necesitas algún presupuesto o tienes alguna consulta sobre nuestros productos, no dudes en escribirnos</p>
        <button>
          <a href={`https://wa.me/${phoneNumber}`}
          //   className={`whatsapp-button ${showButton ? 'show' : 'hide'}`}
            target="_blank"
            rel="noopener noreferrer">
              Escríbenos
              {/* <img src={WppIcon} alt="ícono de WhatsApp" className='iconWpp'/> */}
          </a>
        </button>
      </section>
      <section className='schedule'>
        <h2>Nuestro horario</h2>
        <h3>Todos los días</h3>
        <p>Desde las 6:30hs hasta las 20:00hs</p>
        <p>Nos encontrarás cocinando los mejores productos para que deleites tu paladar</p>
      </section>
      <section className='map'>
        {/* AQUI COLOCAREMOS EL MAPA */}
      </section>
    </main>
  )
}

export default ContactPage