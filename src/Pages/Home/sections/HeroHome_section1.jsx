import React from 'react'
import sandwicheria from '../../../assets/Images/Sandwicheria/surt-topView.jpg'
import rotiseria from '../../../assets/Images/Rotiseria/pizza_c-gusto.jpg'
import confiteria from '../../../assets/Images/Confiteria/masa-seca-topViewRight.jpg'
import panaderia from '../../../assets/Images/Panaderia/pan.jpg'

const HeroHome_section1 = () => {
  return (
    <section className='heroHome'>
      <div className='leftSideDiv'>
        <div className='leftTextContainer'>
          <div className='leftHeaderContainer'>
              <h2>Disfruta del pan recién horneado y los mejores bizcochos del Prado en </h2>
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
        <span className='decorationBottomLine'></span>
      </div>
      <div className='rightSideDiv'>
        <img src={panaderia} alt="" />
        <img src={rotiseria} alt="" className='rotiseriaImg'/>
        <img src={confiteria} alt="" className='confiteriaImg'/>
        <img src={sandwicheria} alt="" />
        <span className='decorationRightLine'></span>
      </div>
    </section>
  )
}

export default HeroHome_section1