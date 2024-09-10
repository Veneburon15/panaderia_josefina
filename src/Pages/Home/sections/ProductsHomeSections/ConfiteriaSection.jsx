import React, { forwardRef } from 'react'
import oreoCake from '../../../../assets/Images/Confiteria/oreoCake-Closer.jpg'
import alfajoresMix from '../../../../assets/Images/Confiteria/alfajoresMix-close.jpg'
import cookies from '../../../../assets/Images/Confiteria/cookiesCloser.jpg'
import postres from '../../../../assets/Images/Confiteria/cake2.jpg'
import pieceOfCake from '../../../../assets/Images/Confiteria/pieceOfCake.jpg'



const ConfiteriaSection = ({},confiteriaRef) => {
  return (
    <div ref={confiteriaRef} className='confiteriaContainer'>
        <div className='productsTextDiv'>
        <h2>Confitería</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, dolorem aliquid eaque deserunt, explicabo voluptatibus exercitationem dignissimos nobis nemo laboriosam perferendis ex quibusdam aut?</p>
        </div>
        <div className='confiteriaBento '>
            <img src={oreoCake} alt="" className='left'/>
            <img src={alfajoresMix} alt="" className='leftTop'/>
            <img src={cookies} alt="" className='leftBottom'/>
            <img src={postres} alt="" className='rightTop'/>
            {/* <img src={alfajorMani} alt="" className='rightBottom'/> */}
            <img src={pieceOfCake} alt="" className='right'/>
        </div>
    </div>  
  )
}

export default forwardRef(ConfiteriaSection);