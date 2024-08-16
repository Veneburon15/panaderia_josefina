import React from 'react'

const LunchListRendering = ({ products }) => {
    return (
        <section className='listRenderingSection'>
            <h3>Aquí los productos de tu Lunch</h3>
            <ul>
                {products.map((product) => (
                <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>

        </section>

    );
  };

export default LunchListRendering