export default function handler(req, res) {
    if (req.method === 'POST') {
      const { address, card } = req.body;
      // Store order in database or process it
      res.status(200).json({ message: 'Order placed successfully!' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
<form onSubmit={handleSubmit}>
  <div className="mb-4">
    <label className="block text-lg mb-2">Shipping Address</label>
    <input
      type="text"
      value={shippingAddress}
      onChange={(e) => setShippingAddress(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      placeholder="Enter your shipping address"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-lg mb-2">Credit Card Information</label>
    <input
      type="text"
      value={creditCardInfo}
      onChange={(e) => setCreditCardInfo(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      placeholder="Enter your credit card details"
      required
    />
  </div>
  <button
    type="submit"
    className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all"
  >
    Submit Order
  </button>
</form>
