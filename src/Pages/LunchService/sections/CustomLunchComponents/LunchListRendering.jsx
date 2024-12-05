import React, { useState, useEffect } from 'react';

const LunchListRendering = ({ products, setProducts }) => {
  const [quantities, setQuantities] = useState({});

  // Función para inicializar los datos desde localStorage
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('lunchProducts')) || [];
    const savedQuantities = JSON.parse(localStorage.getItem('lunchQuantities')) || {};

    if (savedProducts.length > 0) {
      setProducts(savedProducts);
    }

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      ...savedQuantities,
    }));
  }, [setProducts]);

  // Guardar productos y cantidades en localStorage
  useEffect(() => {
    localStorage.setItem('lunchProducts', JSON.stringify(products));
    localStorage.setItem('lunchQuantities', JSON.stringify(quantities));
  }, [products, quantities]);

  // Función para actualizar la cantidad de un producto específico
  const handleCountChange = (productId, newCount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newCount,
    }));
  };

  // Función para eliminar un producto del array
  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    const { [productId]: _, ...updatedQuantities } = quantities;

    setProducts(updatedProducts);
    setQuantities(updatedQuantities);
  };

  // Determina el paso de incremento basado en la categoría del producto
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
    const defaultCount = 12;
    const count = quantities[productId] || defaultCount;
    const incrementStep = getIncrementStep(category);

    const handleIncrement = () => {
      const newCount = count + incrementStep;
      handleCountChange(productId, newCount);
    };

    const handleDecrement = () => {
      const newCount = count > incrementStep ? count - incrementStep : defaultCount;
      handleCountChange(productId, newCount);
    };

    return (
      <div className="counter">
        <button onClick={handleDecrement} disabled={count === defaultCount}> - </button>
        <span>{count}</span>
        <button onClick={handleIncrement}> + </button>
      </div>
    );
  };

  const calculateTotal = (product) => {
    const pricePerUnit = parseFloat(product.precioUnidad) || precioUnidad;
    const count = quantities[product.id] || 12;
    return pricePerUnit * count;
  };

  const calculateTotalArray = () => {
    return products.reduce((total, product) => {
      return total + calculateTotal(product);
    }, 0);
  };

  const generateMessage = (products) => {
    const productDetails = products
      .map(
        (product) =>
          `_*Producto:*_ ${product.nombre}, Precio por unidad: ${product.precioUnidad}, _*Cantidad:*_ ${
            quantities[product.id] || 12
          }`
      )
      .join('\n');

    const total = calculateTotalArray().toFixed(1);
    return `*Tu pedido:*\n${productDetails}\n\n*Precio Total:* $${total}`;
  };

  const createWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '59895356894';
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleSendWhatsApp = () => {
    const message = generateMessage(products);
    const link = createWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return (
    <section className="listRenderingSection">
      <h3 className="secondaryCustomHeader">Aquí están los productos de tu Lunch</h3>
      <ul>
        {products.map((product) => (
          <div key={product.id} className="productItem">
            <div className="itemTopDiv">
              <p>
                {product.categoria} {product.nombre} - <strong>${product.precioUnidad} c/u</strong>
              </p>
              <Counter productId={product.id} category={product.categoria} />
            </div>
            <div className="itemBelowDiv">
              <button className="deleteButton" onClick={() => handleRemoveProduct(product.id)}>
                Eliminar Producto
              </button>
              <p>Total: ${calculateTotal(product).toFixed(1)}</p>
            </div>
          </div>
        ))}
      </ul>
      <h4>Total General: ${calculateTotalArray().toFixed(1)}</h4>
      <button className="whatsAppSendButton" onClick={handleSendWhatsApp}>
        Enviar pedido por WhatsApp
      </button>
    </section>
  );
};

export default LunchListRendering;
