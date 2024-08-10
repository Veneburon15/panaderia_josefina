import React from 'react'
import medialunaTop from '../../../../assets/Images/Sandwicheria/medLun-TopViewCloser.jpg'
import medialunaCloser from '../../../../assets/Images/Sandwicheria/medLun-near.jpg'
import sandMixSideView from '../../../../assets/Images/Sandwicheria/sandMix-sideView.jpg'
import sandMixTop from '../../../../assets/Images/Sandwicheria/mixSand-topView.jpg'
import olimpicos from '../../../../assets/Images/Sandwicheria/sand-topView.jpg'
import surtTop from '../../../../assets/Images/Sandwicheria/surt-topView.jpg'

const SandwicheriaSection = () => {
  return (
    <div className='sandwicheriaContainer'>
        <div className='sandwicheriaLeftBento'>
          <img src={medialunaTop} alt="" className='top'/>
          <img src={medialunaCloser} alt="" className='bottomLeft'/>
          <img src={sandMixSideView} alt="" className='bottomRight'/>
        </div>
        <div className='productsTextDiv'>
          <h2>Sandwichería</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, dolorem aliquid eaque deserunt, explicabo voluptatibus exercitationem dignissimos nobis nemo laboriosam perferendis ex quibusdam aut?</p>
        </div>
        <div className='sandwicheriaRightBento'>
          <img src={sandMixTop} alt="" className='topLeft'/>
          <img src={olimpicos} alt="" className='topRight'/>
          <img src={surtTop} alt="" className='bottom'/>
        </div>
    </div>
  )
}

export default SandwicheriaSection