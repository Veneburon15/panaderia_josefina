import React from 'react'
// // IMPORTS FROM PANADERIA SECTION
import bizcochos from '../../../../assets/Images/Panaderia/bizcochos.jpg'
import pan from '../../../../assets/Images/Panaderia/pan.jpg'


const PanaderiaSection = () => {
  return (
    <div className='panaderiaContainer'>
        <div className='productsTextDiv'>
          <h2>Panadería</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam a alias vitae doloremque quis recusandae minus assumenda ipsam quae.</p>
        </div>
        <div className='panaderiaBento'>
          <img src={bizcochos} alt="" />
          <img src={pan} alt="" />
        </div>
      </div>
  )
}

export default PanaderiaSection