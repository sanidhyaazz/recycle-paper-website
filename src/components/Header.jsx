import React from 'react';
import './Header.css'; // Make sure to import your CSS file

function Header() {
  return (
    <header className="relative mt-16 text-center bg-gray-900 overflow-hidden h-96">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/media/headerBg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-8 flex flex-col items-center justify-center h-full clip-path-portion">
        <h1 className="text-5xl font-bold text-green-700">Make India More Healthy</h1>
        <h3 className="text-xl mt-4 text-white">Contribute to a greener future by recycling paper today!</h3>
        <button className="mt-8 px-6 py-3 text-white rounded-lg bg-green-700 hover:bg-green-500">
          Explore More
        </button>
      </div>
    </header>
  );
}

export default Header;
