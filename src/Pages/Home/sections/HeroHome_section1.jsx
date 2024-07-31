import React from 'react'

const HeroHome_section1 = () => {
  return (
    <section className='heroHome'>
      <div className='leftTextContainer'>
        <div className='leftHeaderContainer'>
            <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h2>
            <h1 className='bakeryHeader'>Panadería Josefina</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium illo omnis, suscipit tempora ad culpa.</p>
        <div className='anos_productosContainer'>
          <div>
              <p>+ () años</p>
          </div>
          <div>
              <p>+ () productos</p>
          </div>
        </div>
      </div>
      <img src="" alt="" />
      {/* Se puede considerar el anidar el img en un figure, dependiendo del tipo de imagen que vayamos a agregar, si sera relevante para el entendimiento de la pagina se nida, si es puramente estetico se agrega al flujo de la pagina anda mas */}
    </section>
  )
}

export default HeroHome_section1