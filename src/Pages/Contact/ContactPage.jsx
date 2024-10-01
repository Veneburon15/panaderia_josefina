import React from 'react'

const ContactPage = () => {
  const phoneNumber = '+59896230343'; 

  return (
    <main className='contactMain'>
      <section className='topSectionContainer'>
        <div className='contactoLeftDiv'>
          <h2>¡Escríbenos Por WhatsApp!</h2>
          <p>Si necesitas algún presupuesto o tienes alguna consulta sobre nuestros productos, no dudes en escribirnos</p>
          <button>
            <a href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer">
                Escríbenos
                {/* <img src={WppIcon} alt="ícono de WhatsApp" className='iconWpp'/> */}
            </a>
          </button>
        </div>
        <div className='schedule'>
          <h2>Nuestro horario</h2>
          <h3>Todos los días</h3>
          <p>Desde las 6:30hs hasta las 20:00hs</p>
          <p>Nos encontrarás cocinando los mejores productos para que deleites tu paladar</p>
        </div>
      </section>
      <section className='mapContainer'>
        <h2 className=''>¿Dónde nos encontramos?</h2>
        <iframe className='Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26192.985137133215!2d-56.22575011700157!3d-34.85313302781232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1d54a10c82889%3A0x68a17f2e633d403c!2sPanader%C3%ADa%20Josefina!5e0!3m2!1ses!2suy!4v1674613613299!5m2!1ses!2suy"></iframe> 
      </section>
    </main>
  )
}

export default ContactPage