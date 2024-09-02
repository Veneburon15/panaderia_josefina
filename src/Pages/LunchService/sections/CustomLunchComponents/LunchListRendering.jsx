import React from 'react'
import Counter from '../../../../Components/Funtionalities/Counter'

const LunchListRendering = ({ products }) => {
    return (
        <section className='listRenderingSection'>
            <h3>Aquí los productos de tu Lunch</h3>
            <ul>
                {products.map((product) => (
                    <div>
                        <li key={product.id}>{product.nombre} - {product.precioUnidad}</li>
                        <Counter/>
                    </div>
                ))}
            </ul>
        </section>
    );
  };

export default LunchListRendering