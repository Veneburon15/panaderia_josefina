import React from 'react'
import Tortillas from '../../../../assets/Images/Rotiseria/tortillas.jpg'
import MedallonesDeVegetal from '../../../../assets/Images/Rotiseria/vegetableCookies.jpg'
import EnsaladaDePapa from '../../../../assets/Images/Rotiseria/saladSpoon-side.jpg'

const RotiseriaSection = () => {
  return (
    <div className='rotiseriaContainer'>
        <div className='productsTextDiv'>
          <h2>Rotisería</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, dolorem aliquid eaque deserunt, explicabo voluptatibus exercitationem dignissimos nobis nemo laboriosam perferendis ex quibusdam aut?</p>
        </div>
        <div className='rotiseriaBento'>
          <img src={Tortillas} alt="Tortillas de papa y de espinaca" />
          <img src={MedallonesDeVegetal} alt="" className='Medallones de Vegtales' />
          <img src={EnsaladaDePapa} alt="" className='Ensalada de Papa' />

        </div>
    </div>  
    )
}

export default RotiseriaSection;