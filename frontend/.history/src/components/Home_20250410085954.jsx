import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
            <Link
              to="/Comments"
              className="hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
            >
              <Comments></Comments>
            </Link>
    </div>
  );
};

export default Home;
