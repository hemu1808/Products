import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import ProductPopup from '../components/ProductPopup';
import CheckoutForm from '../components/CheckoutForm';

const products = [
  {
    id: 1,
    title: 'Calithe Watch',
    price: '19.99',
    description: 'Sleek watch for Men.',
    image: 'images/watch.jpg',
  },
  {
    id: 2,
    title: 'Headphones',
    price: '69.99',
    description: 'Thumping Sound.',
    image: './images/headphones.jpg',
  },
  {
    id: 3,
    title: 'Leather Bag',
    price: '39.99',
    description: 'Elegant and versatile for all needs.',
    image: '/images/bag.jpg',
  },
  {
    id: 4,
    title: 'Sneakers',
    price: '49.99',
    description: 'Clean white shoes for any occasion.',
    image: '/images/sneakers.jpg',
  },
  {
    id: 5,
    title: 'Lamp',
    price: '59.99',
    description: 'A Modern lamp for clean look',
    image: '/images/lamp.jpg',
  },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showSampleDialog, setShowSampleDialog] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  const handlePlaceOrder = () => {
    if (cart.length > 0) {
      setShowCheckout(true);
    } else {
      alert("Your cart is empty!");
    }
  };

  return (
    <div className="flex flex-col items- center justify- center min-h-screen bg-gray-100 text-black font-classy">
      <h1 className="text-5xl font-bold mb-10 animate- fade-in">Hemanth's Collection</h1>
      <h3 className='text-5xl font-normal mb-10 animate- fade-in'>This is my Sample work to showcase my Next.js & Tailwind CSS skills, Built from scratch</h3>
      <p className='text-5xl font-normal mb-10 animate- fade-in'>This webpage is a showcase of my skills in Next.js and Tailwind CSS. It features a dynamic Random products store where users can browse various products, add them to their cart, view detailed product information in popups, and proceed to checkout. The site emphasizes responsiveness, smooth transitions, and a clean design, making it a perfect example of modern web development practices.</p>

      {/* Cart Icon and Cart Component */}
      <div className="flex justify-between w-full max-w-6xl mb-6">
        <button
          className="bg-black text-white p-3 rounded-full hover:bg-gray-700 transition duration-300"
          onClick={() => setShowCart(!showCart)}
        >
          <img
          src="/images/cart.png"
          alt="Cart"
          className="cart-icon"
          />
        </button>
        {showCart && <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />}
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify- center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {/* Sample Dialog Button */}
      <div className="mt-4">
        <button
          className="bg-black text-white p-3 rounded-full hover:scale-100 transition-transform duration-300"
          onClick={() => setShowSampleDialog(true)}
        >
          Open Sample Dialog
        </button>
      </div>

      {/* Transparent Sample Dialog */}
      {showSampleDialog && (
        <dialog
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify- center fade-in"
          onClose={() => setShowSampleDialog(false)}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Sample Dialog</h2>
            <p>This is an example dialog box with transparent effects!</p>
            <button
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
              onClick={() => setShowSampleDialog(false)}
            >
              Close
            </button>
          </div>
        </dialog>
      )}

      {/* Product Popup */}
      {selectedProduct && <ProductPopup product={selectedProduct} onClose={closePopup} />}

      {/* Place Order Button */}
      <div className="mt-8">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>

      {/* Checkout Form */}
      {showCheckout && (
        <CheckoutForm cart={cart} />
      )}
    </div>
  );
}
