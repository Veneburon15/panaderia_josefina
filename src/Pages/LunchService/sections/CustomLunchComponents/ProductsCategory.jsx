import React from 'react';

const ProductsCategory = ({ title, isActive, toggleSection, products, handleProductSelect }) => {
    return (
        <div className="accordionDiv">
            <div className='toggleTrigger'>
                <h4 onClick={toggleSection}>{title}</h4>
                <span className='backgroundDecoration'></span>
            </div>
            {isActive && (
                <div className="accordionContent">
                    <ul>
                        {products.map((product) => (
                            <li key={product.id} className='list'>
                                <p> {product.nombre} - ${product.precioUnidad} c/u </p>
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