import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; // Assuming it's in components folder
import Cart from '../components/Cart';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    axios.get('http://localhost:5000/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-container">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </ul>
      <Cart cart={cart} />
    </div>
  );
}
