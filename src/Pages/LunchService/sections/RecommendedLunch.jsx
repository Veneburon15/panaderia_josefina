import React, { forwardRef, useEffect, useState } from 'react'
import { getLunchs } from '../../../async';
import MadeLunchContainer from './RecommendedLunchComponents/MadeLunchContainer';

const RecommendedLunch = ({}, recommendedSection) => {
  const [lunchs, setLunchs] = useState([]);

  useEffect(() => {
    getLunchs()
      .then(response => setLunchs(response))
      .catch((error => console.log(error)))
  }, []);

  return (
    <section ref={recommendedSection} className='recommendedLunch'>
      <h2>Aquí algunas opciones para tu reunión</h2>
      <MadeLunchContainer lunchs={lunchs}/>
      <p>🧠 <strong>Recuerda:</strong> Todos los lunch se tienen que pedir con por lo menos 48hs de anticipación</p>
    </section>
  )
}

export default forwardRef(RecommendedLunch); 