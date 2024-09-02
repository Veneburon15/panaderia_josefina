import React, { useState, useEffect } from 'react';
import { getProducts } from '../../../../async';
import ProductsCategory from './ProductsCategory';

const ProductPicking = ({ onAddProduct }) => {
    // // PRODUCTS FETCHING
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
        .then(response => setProducts(response))
        .catch((error) => console.log(error));
    }, []);
    
    // // PRODUCTS FILTERING FOR CATEGORY
    const filteredProducts = (category) => {
        return products.filter(product => product.categoria === category);
    };

    // // SELECTED PRODUCTS ARRAY FUNCTIONALITY
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
    
    // // TOGGLE FUNCTIONALITY
    const [activeSections, setActiveSections] = useState({
      sandwichesTriang: false,
      sandwichesCopetin: false,
      bocaditosCalientes: false,
      saladitos: false,
    });

    const toggleSection = (sectionName) => {
        setActiveSections((prevSections) => ({
            ...prevSections,
            [sectionName]: !prevSections[sectionName],
        }));
    };
    

    return (
        <section className="productTypeSection">
            <h3>Elige los productos</h3>
            <ProductsCategory
                title="Sandwiches Triangulares"
                isActive={activeSections.sandwichesTriang}
                toggleSection={() => toggleSection('sandwichesTriang')}
                products={filteredProducts('Sandwiches Triangulares')}
                handleProductSelect={handleProductSelect}
            />
            <ProductsCategory
                title="Sandwiches de Copetín"
                isActive={activeSections.sandwichesCopetin}
                toggleSection={() => toggleSection('sandwichesCopetin')}
                products={filteredProducts('Sandwiches Copetin')}
                handleProductSelect={handleProductSelect}
            />
            <ProductsCategory
                title="Bocaditos Calientes"
                isActive={activeSections.bocaditosCalientes}
                toggleSection={() => toggleSection('bocaditosCalientes')}
                products={filteredProducts('Bocaditos Calientes')}
                handleProductSelect={handleProductSelect}
            />
            <ProductsCategory
                title="Saladitos"
                isActive={activeSections.saladitos}
                toggleSection={() => toggleSection('saladitos')}
                products={filteredProducts('Saladitos')}
                handleProductSelect={handleProductSelect}
            />
        </section>
    );
};

export default ProductPicking;