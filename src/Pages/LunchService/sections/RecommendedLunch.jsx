import React, { forwardRef } from 'react'

const RecommendedLunch = ({}, recommendedSection) => {
  return (
    <section ref={recommendedSection} className='recommendedLunch'>
      <h2>Aquí algunas opciones para tu reunión</h2>
      <div className='madeLunchContainer'>
        <div className='madeLunch'>
          <h4>Lunch para 6 personas</h4>
          <span className='decorationSpan'></span>
          <p className='lunchContent'>42 sandwiches <br />
          <span className='lunchExtraData'>(jamón y queso / surtidos)</span><br />
          12 jesuitas <br />
          1/2 Kg. de masas</p>
          <p className='price'>$ 1733</p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para 10 personas</h4>
          <span className='decorationSpan'></span>
          <p className='lunchContent'>48 sandwiches <br />
          <span className='lunchExtraData'>(jamón y queso / surtidos)</span><br />
          26 jesuitas <br />
          26 saladitos <br />
          3/4 Kg. de masas</p>
          <p className='price'>$ 2801</p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para 15 personas</h4>
          <span className='decorationSpan'></span>
          <p className='lunchContent'>85 sandwiches <br />
          <span className='lunchExtraData'>(jamón y queso / surtidos)</span><br />
          35 jesuitas <br />
          35 saladitos <br />
          1 Kg. de masas</p>
          <p className='price'>$ 4400</p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para 20 personas</h4>
          <span className='decorationSpan'></span>
          <p className='lunchContent'>96 sandwiches <br />
          <span className='lunchExtraData'>(jamón y queso / surtidos)</span><br />
          50 jesuitas <br />
          50 saladitos <br />
          1 Kg. de masas</p>
          <p className='price'>$ 5436</p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para 25 personas</h4>
          <span className='decorationSpan'></span>
          <p className='lunchContent'>120 sandwiches <br />
          <span className='lunchExtraData'>(jamón y queso / surtidos)</span> <br />
          50 jesuitas <br />
          50 saladitos <br />
          1.5 Kg. de masas</p>
          <p className='price'>$ 6375</p>
        </div>
        <div className='madeLunch'>
          <h4>Lunch para 50 personas</h4>
          <span className='decorationSpan'></span>
          <p className='lunchContent'>250 sandwiches <br />
          <span className='lunchExtraData'>(jamón y queso / surtidos)</span> <br />
          100 jesuitas <br />
          100 saladitos <br />
          100 croquetitas <br />
          150 empanaditas <br />
          1 torta de 5 Kg.</p>
          <p className='price'>$ 17096</p>
        </div>
      </div>
      <p>🧠 <strong>Recuerda:</strong> Todos los lunch se tienen que pedir con por lo menos 48hs de anticipación</p>
    </section>
  )
}

export default forwardRef(RecommendedLunch); 