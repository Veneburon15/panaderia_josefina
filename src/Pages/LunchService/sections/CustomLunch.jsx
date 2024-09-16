import React, { forwardRef, useState } from 'react';
import ProductPicking from './CustomLunchComponents/ProductPicking';
import LunchListRendering from './CustomLunchComponents/LunchListRendering';

const CustomLunch = (props, customSection) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Función para manejar la adición de productos
  const handleAddProduct = (product) => {
    setSelectedProducts(prevProducts => {
      // Verifica si el producto ya está en la lista
      if (!prevProducts.some(p => p.id === product.id)) {
        return [...prevProducts, product];
      }
      return prevProducts;
    });
  };

  // Función para manejar la eliminación de productos
  const handleRemoveProduct = (productId) => {
    setSelectedProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );
  };

  return (
    <section ref={customSection} className='customLunch'>
      <h2>Crea tu lunch perfecto</h2>
      <h3>Tienes una idea... ¿pero no sabes cuanto puede costar? <br />Haz un presupuesto con nosotros</h3>
      <div className='customLunchContainer'>
        {/* Pasar la función handleAddProduct correctamente */}
        <ProductPicking onAddProduct={handleAddProduct} />
        
        {/* Pasar tanto productos como la función onRemoveProduct */}
        <LunchListRendering 
          products={selectedProducts} 
          setProducts={setSelectedProducts} 
          onRemoveProduct={handleRemoveProduct} 
        />
      </div>
    </section>
  );
}

export default forwardRef(CustomLunch);