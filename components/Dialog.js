const Dialog = ({ onClose, title, children }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold mb-4">{title}</h2>
          <div>{children}</div>
          <button
            onClick={onClose}
            className="mt-4 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Dialog;
  