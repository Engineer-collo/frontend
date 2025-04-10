import React from "react";
import { Link } from "react-router-dom";
import Posts from "./Posts";

const Home = () => {
  return (
    <div>

      <div>
        <p>
        < Posts/>
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
