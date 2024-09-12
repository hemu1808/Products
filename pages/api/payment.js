import { useState } from 'react';

const Shipping = () => {
  const [shippingInfo, setShippingInfo] = useState({ address: '', card: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify(shippingInfo),
      headers: { 'Content-Type': 'application/json' }
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <label className="block mb-2">Address</label>
        <input type="text" className="w-full mb-4 p-2 border" onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })} />
        <label className="block mb-2">Credit Card</label>
        <input type="text" className="w-full mb-4 p-2 border" onChange={(e) => setShippingInfo({ ...shippingInfo, card: e.target.value })} />
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Shipping;
