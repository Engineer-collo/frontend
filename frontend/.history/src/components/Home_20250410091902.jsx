import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>

      <div>
        <p>
        < />
        </p>
      </div>
            <Link
              to="/comments"
              className=" text-blue-700 px-3 py-2 rounded-md transition duration-300"
            >
              Comments
            </Link>
    </div>
  );
};

export default Home;
