import React from 'react'
import masitas from '../../../assets/Images/Confiteria/masitas.jpg'
import foleatela from '../../../assets/Images/Confiteria/foleatela.jpg'
import dona from '../../../assets/Images/Confiteria/dona.jpg'
import rosquita from '../../../assets/Images/Confiteria/rosquita.jpg'
import tortaDulce from '../../../assets/Images/Confiteria/torta_dulce_leche.jpg'
import palitosQueso from '../../../assets/Images/Confiteria/palitos_de_queso.jpg'
import chaja from '../../../assets/Images/Confiteria/chaja.jpg'

const ProductsHome_section2 = () => {
  return (
    <section className='productsHome'>
      <h2>Nuestros productos</h2>
      <div className='panaderiaContainer'>
        <div className='productsTextDiv'>
          <h2>Panadería</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic aperiam a alias vitae doloremque quis recusandae minus assumenda ipsam quae.</p>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className='rotiseriaContainer'>
        <div className='productsTextDiv'>
          <h2>Rotisería</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, dolorem aliquid eaque deserunt, explicabo voluptatibus exercitationem dignissimos nobis nemo laboriosam perferendis ex quibusdam aut?</p>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className='confiteriaContainer'>
        <div className='productsTextDiv'>
          <h2>Confitería</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, dolorem aliquid eaque deserunt, explicabo voluptatibus exercitationem dignissimos nobis nemo laboriosam perferendis ex quibusdam aut?</p>
        </div>
        <div className='confiteriaBento'>
          <div className='fatherLeftDiv'>
            <div className='childrenLeftDiv'>
              <img src={masitas} alt="" className='topLeftImg' />
              <img src={foleatela} alt="" className='bottomLeftImg' />
            </div>
            <div className='childrenCenterDiv'>
              <div className='childrenCenterTopDiv'>
                <img src={dona} alt="" />
                <img src={rosquita} alt="" />
              </div>
              <div className='childrenCenterBottomDiv'>
                <img src={tortaDulce} alt="" />
                <img src={palitosQueso} alt="" />
              </div>
            </div>
          </div>
          <img src={chaja} alt="" />
        </div>
      </div>
      <div className='sandwicheriaContainer'>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className='productsTextDiv'>
          <h2>Sandwichería</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fugiat, dolorem aliquid eaque deserunt, explicabo voluptatibus exercitationem dignissimos nobis nemo laboriosam perferendis ex quibusdam aut?</p>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}

export default ProductsHome_section2