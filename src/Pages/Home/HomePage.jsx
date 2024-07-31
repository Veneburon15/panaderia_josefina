import HeroHome_section1 from './sections/HeroHome_section1'
import ProductsHome_section2 from './sections/ProductsHome_section2'
import ContactHome_section3 from './sections/ContactHome_section3'

const HomePage = () => {
  return (
    <main className='homeMain'>
      <HeroHome_section1/>
      <ProductsHome_section2/>
      <ContactHome_section3/>
    </main>

  )
}

export default HomePage