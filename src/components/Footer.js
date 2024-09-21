import React from 'react';

function Footer() {
  return (
    <footer className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div>
        <h3 className="font-bold">Recycled Paper Hub</h3>
        <p>Address: 123 Green Street, New Delhi, India</p>
        <p>Contact: +91 1234567890</p>
        <p>Email: info@recycledpaperhub.in</p>
      </div>
      <div>
        <h3 className="font-bold">Follow Us</h3>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Facebook</a></li>
          <li><a href="#" className="hover:underline">Twitter</a></li>
          <li><a href="#" className="hover:underline">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
