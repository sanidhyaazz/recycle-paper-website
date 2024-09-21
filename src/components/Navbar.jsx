import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-6">
      <h1 className="text-white text-xl font-bold">Recycled Paper Hub</h1>
      <ul className="flex space-x-6">
        <li className="text-white cursor-pointer">Home</li>
        <li className="text-white cursor-pointer">Buy Paper</li>
        <li className="text-white cursor-pointer">Sell Paper</li>
        <li className="text-white cursor-pointer">About Us</li>
        <li className="text-white cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
