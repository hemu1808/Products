import React from 'react';

const ProductPopup = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full popup">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
          &#10005; {/* Close button (X) */}
        </button>
        <div className="flex flex-col items-center">
          <img src={product.image} alt={product.name} className="w-48 h-48 object-cover mb-4 rounded-lg" />
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className="text-lg font-semibold mb-4">{product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button
            onClick={onClose}
            className="mt-4 w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
