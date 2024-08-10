import React, { forwardRef } from 'react'
import alfajorChocolate from '../../../../assets/Images/Confiteria/alf-chocolate.jpg'
import alfajorMani from '../../../../assets/Images/Confiteria/alf-peanut.jpg'
import alfajorMaicena from '../../../../assets/Images/Confiteria/alf-maicena-closer.jpg'
import alfajorMix from '../../../../assets/Images/Confiteria/alf-rightViewTop.jpg'
import postres from '../../../../assets/Images/Confiteria/cake-topView.jpg'
import masaSecas from '../../../../assets/Images/Confiteria/masa-seca-sideView.jpg'
import singleCake from '../../../../assets/Images/Confiteria/alf-leftViewTop.jpg'



const ConfiteriaSection = ({},confiteriaRef) => {
  return (
    <div ref={confiteriaRef} className='confiteriaContainer'>
        <div className='productsTextDiv'>
        <h2>Confitería</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, dolorem aliquid eaque deserunt, explicabo voluptatibus exercitationem dignissimos nobis nemo laboriosam perferendis ex quibusdam aut?</p>
        </div>
        <div className='confiteriaBento '>
            <img src={singleCake} alt="" className='left'/>
            <img src={postres} alt="" className='leftTop'/>
            <img src={masaSecas} alt="" className='leftBottom'/>
            <img src={alfajorMaicena} alt="" className='rightTop'/>
            <img src={alfajorMani} alt="" className='rightBottom'/>
            <img src={alfajorMix} alt="" className='right'/>
        </div>
    </div>  
  )
}

export default forwardRef(ConfiteriaSection);