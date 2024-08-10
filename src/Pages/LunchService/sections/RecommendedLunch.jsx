import React, { forwardRef } from 'react'

const RecommendedLunch = ({}, recommendedSection) => {
  return (
    <section ref={recommendedSection} className='recommendedLunch'>
      <h2>Aquí algunas opciones para tu reunión</h2>
      <div className='madeLunchContainer'>
        <div className='madeLunch'>
          <h4>Lunch para (?) personas</h4>
          <p className='lunchContent'></p>
          <p className='price'></p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para (?) personas</h4>
          <p className='lunchContent'></p>
          <p className='price'></p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para (?) personas</h4>
          <p className='lunchContent'></p>
          <p className='price'></p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para (?) personas</h4>
          <p className='lunchContent'></p>
          <p className='price'></p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para (?) personas</h4>
          <p className='lunchContent'></p>
          <p className='price'></p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para (?) personas</h4>
          <p className='lunchContent'></p>
          <p className='price'></p>
        </div>
      </div>
    </section>
  )
}

export default forwardRef(RecommendedLunch); 