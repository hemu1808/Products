import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search products..."
        className="w-full px-4 py-2 text-lg text-gray-700"
      />
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;