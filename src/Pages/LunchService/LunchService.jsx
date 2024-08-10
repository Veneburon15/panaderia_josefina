import React, { useRef } from 'react'
import CustomLunch from './sections/CustomLunch'
import RecommendedLunch from './sections/RecommendedLunch'
import Contact from '../../Components/Contact'

const LunchService = () => {
  const customSection = useRef(null);
  const recommendedSection = useRef(null); 

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <main className='lunchMain'>
      <section className='heroLunch'>
        <div className='mainContainer'>
          <div className='leftSideDivHero'>
            <div className='headersContainerFather'>
              <h2>¿</h2>
              <div className='headersContainerChildren'>
                <h3>Tenes un evento <br />o una fiesta</h3>
              </div>
              <h2>?</h2>
            </div>
            <div className='headersContainerFather secondaryHeadersContainer'>
              <h2>¿</h2>
              <div className='headersContainerChildren'>
                <h3>Estás pensando en pedir un lunch</h3>
              </div>
              <h2>?</h2>
            </div>
          </div>
          <div className='lunchPicking'>
            <div className='builtLunch'>
              <h4>Tenemos varias opciones ya ideadas para vos</h4>
              <button onClick={() => scrollToSection (recommendedSection)}>Míralas aquí</button>
            </div>
            <div className='customLunch'>
              <h4>O puedes crear tu propio Lunch</h4>
              <button onClick={() => scrollToSection(customSection)}>Creálo aquí</button>
            </div>
          </div>
        </div>
        <Contact/>
      </section>
      <RecommendedLunch ref={recommendedSection}/>
      <CustomLunch ref={customSection}/>
    </main>
  )
}

export default LunchService