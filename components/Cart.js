const Cart = ({ cart, onRemoveFromCart }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg fixed top-20 right-10 w-96 z-50">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul>
        {cart.length === 0 && <p>Your cart is empty!</p>}
        {cart.map((product) => (
          <li key={product.id} className="mb-4">
            <div className="flex justify-between items-center">
              <span>{product.title}</span>
              <span>${product.price}</span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onRemoveFromCart(product)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <p className="text-lg font-bold">Total: ${cart.reduce((acc, product) => acc + parseFloat(product.price), 0).toFixed(2)}</p>
      )}
    </div>
  );
};

export default Cart;
