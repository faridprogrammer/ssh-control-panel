import React from "react";
import { Link, Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-center items-center">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Dashboard</Link></li>
            <li><Link to="/servers" className="text-gray-600 hover:text-gray-800">Servers</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
