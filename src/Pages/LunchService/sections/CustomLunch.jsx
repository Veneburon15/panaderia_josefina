import React, { forwardRef, useState } from 'react';
import ProductPicking from './CustomLunchComponents/ProductPicking';
import LunchListRendering from './CustomLunchComponents/LunchListRendering';

const CustomLunch = ({}, customSection) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (product) => {
    setSelectedProducts(prevProducts => {
      // Verifica si el producto ya está en la lista
      if (!prevProducts.some(p => p.id === product.id)) {
        return [...prevProducts, product];
      }
      return prevProducts;
    });
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );
  };

  return (
    <section ref={customSection} className='customLunch'>
      <h2>Crea tu lunch perfecto</h2>
      <h3>Tienes una idea... ¿pero no sabes cuanto puede costar? <br />Has un presupuesto con nosotros</h3>
      <div className='customLunchContainer'>
        <ProductPicking onAddProduct={handleAddProduct} />
        <span className='decorationSpan'></span>
        <LunchListRendering products={selectedProducts} onRemoveProduct={handleRemoveProduct} />
      </div>
    </section>
  );
}

export default forwardRef(CustomLunch);