import React from 'react'

const Item = ({id, cantidadPersonas, productosLunch, precio}) => {
  return (
    <div className='madeLunch'>
        <h4> Lunch para {cantidadPersonas}</h4>
        <span className='decorationSpan'></span>
        <p className='lunchContent'>{productosLunch}</p>
        <p className='price'>{precio}</p>
    </div>
  )
}

export default Item