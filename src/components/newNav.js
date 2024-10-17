import React from "react";
import "./navbar.css";

const NewBar = () => {
  return (
    <div className="z-10 h-16 w-screen flex items-center justify-between fixed top-0 left-0 m-0 bg-gray-900 text-white shadow-lg px-4">

      {/* Left side items */}
      <div className="flex space-x-6 lato-regular">
        <i>Home</i> 
        <i>Buy Paper</i>
        <i>Sell Paper</i>
        <i>About Us</i>
        <i>Contact</i>
      </div>

      {/* Right side item (Login) */}
      <div className="lato-regular">
        <i className="pr-6">Login</i>
      </div>
    </div>
  );
};

export default NewBar;
