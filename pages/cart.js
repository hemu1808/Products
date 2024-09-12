import { useState, useEffect } from 'react';
import Layout from '../components/Layout';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('/api/cart')
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const removeFromCart = async (id) => {
    const res = await fetch(`/api/cart?id=${id}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    setCartItems(data);
  };

  return (
    <Layout>
      <h1>Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </Layout>
  );
}