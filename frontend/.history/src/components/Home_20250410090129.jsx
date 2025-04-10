import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
            <Link
              to="/Login"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
            >
              Login
            </Link>
    </div>
  );
};

export default Home;
