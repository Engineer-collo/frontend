
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4 flex items-center justify-between text-white shadow-md">
      <div className="">
      <img className="ml-18 h-20 rounded-lg"  src="/logo.png" alt="Logo" />
      </div>
      <div className=" bg-blue-500 border rounded flex justify-center">
      <Link
        to="/home"
        className=" hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Home
      </Link>

      <Link
        to="/login"
        className="hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Login
      </Link>
      
      <Link
        to="/signup"
        className="hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Signup
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
