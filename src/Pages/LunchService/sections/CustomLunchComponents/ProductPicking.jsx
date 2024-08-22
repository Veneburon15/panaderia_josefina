import React, { useState } from 'react';

const ProductPicking = ({ onAddProduct }, Lunchs) => {
    // // // TOGGLE FUNCTIONALITY
    const [activeSections, setActiveSections] = useState({
      sandwicheria: false,
      rotiseria: false,
    });

    const toggleSection = (sectionName) => {
      setActiveSections((prevSections) => ({
        ...prevSections,
        [sectionName]: !prevSections[sectionName],
      }));
    };

    // // // PRODUCTS ARRAY
    const products = [
      { id: 1, name: 'Jamón y queso', price: 5 },
      { id: 2, name: 'Pollo BBQ', price: 7 },
    ];
    // ESTE ARRAY SE PUEDE MOVER A UN ASYNC CON TODOS LOS PRODUCTOS


    // // PRODUCT HANDLING
    const [selectedProducts, setSelectedProducts] = useState(new Set());

    const handleProductSelect = (product) => {
    if (!selectedProducts.has(product.id)) {
        selectedProducts.add(product.id);
        setSelectedProducts(new Set(selectedProducts));
        onAddProduct(product);
    } else {
        alert('Este producto ya ha sido agregado.');
    }
    };


    return (
        <section className="productTypeSection">
            <h3>Elige los productos</h3>
            <div className="accordionDiv">
                <h4 onClick={() => toggleSection('sandwicheria')} className="toggleTrigger">Sandwichería</h4>
                {activeSections.sandwicheria && (
                <div className="accordionContent">
                    <ul>
                    {products.map((product) => (
                        <li key={product.id} className='list'>
                        {product.name} - ${product.price}
                        <button onClick={() => handleProductSelect(product)}>Agregar</button>
                        </li>
                    ))}
                    </ul>
                </div>
                )}
            </div>
            <div className="accordionDiv">
                <h4 onClick={() => toggleSection('rotiseria')} className="toggleTrigger">Rotisería </h4>
                {activeSections.rotiseria && (
                <div className="accordionContent">
                    <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleProductSelect(product)}>Agregar</button>
                        </li>
                    ))}
                    </ul>
                </div>
                )}
            </div>
        </section>
    );
};

export default ProductPicking;