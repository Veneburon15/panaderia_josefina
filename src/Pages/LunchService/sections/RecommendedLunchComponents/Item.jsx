import React from 'react'

const Item = ({cantidadPersonas, productosLunch, precio}) => {
  return (
    <div className='madeLunch'>
        <h4> Lunch para {cantidadPersonas}</h4>
        <span className='decorationSpan'></span>
        <pre className='lunchContent'>{productosLunch}</pre>
        <p className='price'>{precio}</p>
    </div>
  )
}

export default Item