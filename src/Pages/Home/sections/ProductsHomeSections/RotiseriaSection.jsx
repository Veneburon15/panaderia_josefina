import React, { forwardRef } from 'react'
// // // IMPORTS FROM ROTISERIA SECTION


const RotiseriaSection = ({}, rotiseriaRef) => {
  return (
    <div className='rotiseriaContainer' ref={rotiseriaRef}>
        <div className='productsTextDiv'>
          <h2>Rotisería</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, dolorem aliquid eaque deserunt, explicabo voluptatibus exercitationem dignissimos nobis nemo laboriosam perferendis ex quibusdam aut?</p>
        </div>
        <div className='rotiseriaBento'>
          {/* <img src={bauru} alt="" />
          <img src={bocata} alt="" className='bocataImg' /> */}
        </div>
    </div>  
    )
}

export default forwardRef(RotiseriaSection);