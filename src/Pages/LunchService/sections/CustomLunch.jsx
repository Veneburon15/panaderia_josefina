import React, { forwardRef, useState } from 'react'
import ProductPicking from './CustomLunchComponents/ProductPicking';
import LunchListRendering from './CustomLunchComponents/LunchListRendering';

const CustomLunch = ({}, customSection) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <section ref={customSection} className='customLunch'>
      <h2>Crea tu lunch perfecto</h2>
      <h3>Tienes una idea... ¿pero no sabes cuanto puede costar? <br />Has un presupuesto con nosotros</h3>
      <div className='customLunchContainer'>
        <ProductPicking onAddProduct={handleAddProduct}/>
        <span className='decorationSpan'></span>
        <LunchListRendering products={selectedProducts}/>
      </div>
    </section>
  )
}

export default forwardRef(CustomLunch); 