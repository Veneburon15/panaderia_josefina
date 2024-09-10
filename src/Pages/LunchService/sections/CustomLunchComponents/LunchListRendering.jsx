import React, { useState, useEffect } from 'react';

const LunchListRendering = ({ products, onRemoveProduct }) => {
  const [quantities, setQuantities] = useState({});

  const handleCountChange = (productId, newCount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newCount,
    }));
  };

  const handleRemoveProduct = (productId) => {
    // Llama a la función proporcionada por el componente padre
    onRemoveProduct(productId);

    // Elimina la cantidad del producto eliminado del estado quantities
    setQuantities((prevQuantities) => {
      const { [productId]: _, ...restQuantities } = prevQuantities;
      return restQuantities;
    });
  };

  const getIncrementStep = (category) => {
    switch (category) {
      case 'Sandwiches Triangulares':
        return 4;
      case 'Sandwiches de Copetín':
        return 6;
      case 'Bocaditos Calientes':
      case 'Saladitos':
        return 1;
      default:
        return 1;
    }
  };

  const Counter = ({ productId, category }) => {
    const count = quantities[productId] || getIncrementStep(category); // Usa el valor inicial de incremento
    const incrementStep = getIncrementStep(category);

    const handleIncrement = () => {
      const newCount = count + incrementStep;
      handleCountChange(productId, newCount);
    };

    const handleDecrement = () => {
      const newCount = count > incrementStep ? count - incrementStep : getIncrementStep(category); // Usa el valor inicial de incremento
      handleCountChange(productId, newCount);
    };

    return (
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    );
  };

  const calculateTotal = (product) => {
    const pricePerUnit = parseFloat(product.precioUnidad);
    const count = parseInt(quantities[product.id]) || getIncrementStep(product.categoria);

    if (isNaN(pricePerUnit) || isNaN(count)) {
      console.error('Error en calcular el total: precioUnidad o cantidad no es un número válido.');
      return 0;
    }

    return pricePerUnit * count;
  };

  const calculateTotalArray = () => {
    return products.reduce((total, product) => {
      return total + calculateTotal(product);
    }, 0);
  };

  const getCategoryTitle = (category) => {
    switch (category) {
      case 'Sandwiches Triangulares':
        return 'Sandwiches Triangulares de';
      case 'Sandwiches de Copetín':
        return 'Sandwiches de Copetín de';
    }
  };

  useEffect(() => {
    console.log('Quantities updated:', quantities);
  }, [quantities]);

  return (
    <section className='listRenderingSection'>
      <h3>Aquí los productos de tu Lunch</h3>
      <ul>
        {products.map((product) => (
          <div key={product.id} className="productItem">
            <li>{getCategoryTitle(product.categoria)} {product.nombre} - ${product.precioUnidad}</li>
            <Counter 
              productId={product.id} 
              category={product.categoria} 
            />
            <p>Total: ${calculateTotal(product).toFixed(1)}</p>
            <button onClick={() => handleRemoveProduct(product.id)}>Eliminar Producto</button>
          </div>
        ))}
      </ul>
      <h4>Total General: ${calculateTotalArray().toFixed(1)}</h4>
    </section>
  );
};

export default LunchListRendering;