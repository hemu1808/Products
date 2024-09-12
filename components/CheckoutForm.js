const CheckoutForm = ({ cart }) => {
    return (
      <div className="bg-white shadow-lg p-6 rounded-lg mt-10 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
        <form className="space-y-4">
          <div>
            <label className="block">Full Name:</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" required />
          </div>
          <div>
            <label className="block">Address:</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" required />
          </div>
          <div>
            <label className="block">Credit Card Number:</label>
            <input className="w-full border border-gray-300 p-2 rounded" type="text" required />
          </div>
          <button className="bg-green-500 text-white p-3 rounded-lg">Submit Order</button>
        </form>
      </div>
    );
  };
  
  export default CheckoutForm;
  