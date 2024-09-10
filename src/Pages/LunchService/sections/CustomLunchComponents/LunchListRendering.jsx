import React, { useState, useEffect } from 'react';

const LunchListRendering = ({ products, setProducts }) => {
  const [quantities, setQuantities] = useState({});

  // Función para actualizar la cantidad de un producto específico
  const handleCountChange = (productId, newCount) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newCount,
    }));
  };

  // Función para eliminar un producto del array
  const handleRemoveProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
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

  // Componente Counter integrado dentro de LunchListRendering
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
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
    );
  };

  // Función para calcular el precio total basado en las cantidades y precios
  const calculateTotal = (product) => {
    const pricePerUnit = parseFloat(product.precioUnidad);
    const count = parseInt(quantities[product.id]) || getIncrementStep(product.categoria);

    if (isNaN(pricePerUnit) || isNaN(count)) {
      console.error('Error en calcular el total: precioUnidad o cantidad no es un número válido.');
      return 0;
    }

    return pricePerUnit * count;
  };

  // Función para calcular el total del array de productos
  const calculateTotalArray = () => {
    return products.reduce((total, product) => {
      return total + calculateTotal(product);
    }, 0);
  };

  // Función para obtener el título adecuado basado en la categoría
  const getCategoryTitle = (category) => {
    switch (category) {
      case 'Sandwiches Triangulares':
        return 'Sandwiches Triangulares de';
      case 'Sandwiches de Copetín':
        return 'Sandwiches de Copetín de';
    }
  };

  // Función para generar el mensaje para WhatsApp
  const generateMessage = (products) => {
    const productDetails = products.map(product =>
      `_*Producto:*_ ${product.nombre}, Precio por unidad: ${product.precioUnidad}, _*Cantidad:*_ ${quantities[product.id] || getIncrementStep(product.categoria)}`
    ).join('\n');
    
    const total = calculateTotalArray().toFixed(1);
    return `*Tu pedido:*\n${productDetails}\n\n*Precio Total:* $${total}`;
  };

  // Función para crear el enlace de WhatsApp
  const createWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/?text=${encodedMessage}`;
  };

  // Función para manejar el envío del mensaje por WhatsApp
  const handleSendWhatsApp = () => {
    const message = generateMessage(products);
    const link = createWhatsAppLink(message);
    window.open(link, '_blank'); // Abre el enlace en una nueva pestaña
  };

  // Debug: Verifica las cantidades actualizadas
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
            <button onClick={() => handleRemoveProduct(product.id)}>Eliminar</button>
          </div>
        ))}
      </ul>
      <h4>Total General: ${calculateTotalArray().toFixed(1)}</h4>
      <button onClick={handleSendWhatsApp}>Enviar por WhatsApp</button> {/* Botón para enviar el mensaje */}
    </section>
  );
};

export default LunchListRendering;
