import React, { forwardRef } from 'react'

const CustomLunch = ({}, customSection) => {
  return (
    <section ref={customSection} className='customLunch'>CustomLunch</section>
  )
}

export default forwardRef(CustomLunch); 