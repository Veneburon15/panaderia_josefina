import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../../async';
import ProductsCategory from './ProductsCategory';

const ProductPicking = ({ onAddProduct }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then(response => setProducts(response))
        .catch((error) => console.log(error));
    }, []);
    
    const filteredProducts = (category) => {
        return products.filter(product => product.categoria === category);
    };

    const handleProductSelect = (product) => {
        onAddProduct(product);
    };

    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (sectionName) => {
        setActiveSection((prevSection) =>
            prevSection === sectionName ? null : sectionName
        );
    };

    return (
        <section className="productTypeSection">
            <h3 className='secondaryCustomHeader'>Elige los productos</h3>
            <ProductsCategory
                title="Sandwiches Triangulares"
                isActive={activeSection === 'sandwichesTriang'}
                toggleSection={() => toggleSection('sandwichesTriang')}
                products={filteredProducts('Sandwiches Triangulares')}
                handleProductSelect={handleProductSelect}
                category="Sandwiches Triangulares"
            />
            <ProductsCategory
                title="Sandwiches de Copetín"
                isActive={activeSection === 'sandwichesCopetin'}
                toggleSection={() => toggleSection('sandwichesCopetin')}
                products={filteredProducts('Sandwiches de Copetín')}
                handleProductSelect={handleProductSelect}
                category="Sandwiches de Copetín"
            />
            <ProductsCategory
                title="Bocaditos Calientes"
                isActive={activeSection === 'bocaditosCalientes'}
                toggleSection={() => toggleSection('bocaditosCalientes')}
                products={filteredProducts('Bocaditos Calientes')}
                handleProductSelect={handleProductSelect}
                category="Bocaditos Calientes"
            />
            <ProductsCategory
                title="Saladitos"
                isActive={activeSection === 'saladitos'}
                toggleSection={() => toggleSection('saladitos')}
                products={filteredProducts('Saladitos')}
                handleProductSelect={handleProductSelect}
                category="Saladitos"
            />
        </section>
    );
};

export default ProductPicking;