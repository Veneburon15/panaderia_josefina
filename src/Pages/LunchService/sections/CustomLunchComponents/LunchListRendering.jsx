import React, { useState, useEffect } from 'react';

const LunchListRendering = ({ products, setProducts }) => {
  const [quantities, setQuantities] = useState({});
  const phoneNumber = '59895356894'; // Número en formato internacional sin el '+'

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
    setQuantities((prevQuantities) => {
      const { [productId]: _, ...restQuantities } = prevQuantities;
      return restQuantities;
    });
    setProducts(updatedProducts);
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
    const count = quantities[productId] || getIncrementStep(category);
    const incrementStep = getIncrementStep(category);

    const handleIncrement = () => {
      const newCount = count + incrementStep;
      handleCountChange(productId, newCount);
    };

    const handleDecrement = () => {
      const newCount = count > incrementStep ? count - incrementStep : getIncrementStep(category);
      handleCountChange(productId, newCount);
    };

    return (
      <div className="counter">
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    );
  };

  const calculateTotal = (product) => {
    const pricePerUnit = parseFloat(product.precioUnidad);
    const count = parseInt(quantities[product.id]) || getIncrementStep(product.categoria);
    return pricePerUnit * count || 0;
  };

  const calculateTotalArray = () => {
    return products.reduce((total, product) => {
      return total + calculateTotal(product);
    }, 0);
  };

  const generateMessage = (products) => {
    const productDetails = products.map(
      (product) =>
        `_*Producto:*_ ${product.nombre}, Precio por unidad: ${product.precioUnidad}, _*Cantidad:*_ ${
          quantities[product.id] || getIncrementStep(product.categoria)
        }`
    ).join('\n');

    const total = calculateTotalArray().toFixed(1);
    return `*Tu pedido:*\n${productDetails}\n\n*Precio Total:* $${total}`;
  };

  const createWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '59895356894'
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleSendWhatsApp = () => {
    const message = generateMessage(products);
    const link = createWhatsAppLink(message);
    window.open(link, '_blank');
  };

  useEffect(() => {
    console.log('Quantities updated:', quantities);
  }, [quantities]);

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
              <button
                className="deleteButton"
                onClick={() => handleRemoveProduct(product.id)}
              >
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
