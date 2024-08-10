import { useRef } from 'react'

import PanaderiaSection from './ProductsHomeSections/PanaderiaSection'
import RotiseriaSection from './ProductsHomeSections/RotiseriaSection'
import ConfiteriaSection from './ProductsHomeSections/ConfiteriaSection'
import SandwicheriaSection from './ProductsHomeSections/SandwicheriaSection'

const ProductsHome_section2 = () => {

  return (
    <section className='productsHome'>
      <h2>Nuestros productos</h2>
      {/* <PanaderiaSection/>
      <RotiseriaSection/> */}
      <ConfiteriaSection/>
      <SandwicheriaSection/>
    </section>
  )
}

export default ProductsHome_section2