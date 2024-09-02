import React from 'react';

const ProductsCategory = ({ title, isActive, toggleSection, products, handleProductSelect }) => {
    return (
        <div className="accordionDiv">
            <h4 onClick={toggleSection} className="toggleTrigger">{title}</h4>
            {isActive && (
                <div className="accordionContent">
                    <ul>
                        {products.map((product) => (
                            <li key={product.id} className='list'>
                                {product.nombre} - {product.precioUnidad}
                                <button onClick={() => handleProductSelect(product)}>Agregar</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProductsCategory;