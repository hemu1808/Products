const ProductCard = ({ product, onAddToCart, onClick }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <img src={product.image} alt={product.title} className="product-image" />
    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
    <p className="text-gray-700 mb-4">${parseFloat(product.price).toFixed(2)}</p>
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
      onClick={onAddToCart}
    >
      Add to Cart
    </button>
    <button
      className="bg-transparent text-black border border-black px-4 py-2 ml-4 rounded hover:bg-gray-200 transition duration-300"
      onClick={onClick}
    >
      Quick View
    </button>
  </div>
);

export default ProductCard;
