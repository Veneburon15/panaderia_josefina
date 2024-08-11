import React, { forwardRef } from 'react'

const CustomLunch = ({}, customSection) => {
  return (
    <section ref={customSection} className='customLunch'>
      <h2>Crea tu lunch perfecto</h2>
      <h3>¿Tienes una idea pero no sabes cuanto puede costar?</h3>
      <p>Has un presupuesto con nosotros</p>
    </section>
  )
}

export default forwardRef(CustomLunch); 