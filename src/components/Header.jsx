import React from 'react';

function Header() {
  return (
    <header className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold text-green-600">Make India More Healthy</h1>
      <h3 className="text-xl mt-4 text-gray-700">Contribute to a greener future by recycling paper today!</h3>
      <button className="mt-8 px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-500">
        Explore More
      </button>
    </header>
  );
}

export default Header;
