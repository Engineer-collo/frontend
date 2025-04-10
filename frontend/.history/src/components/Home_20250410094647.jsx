// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Pixi-Fy!</h1>
      
      <Link
        to="/Comments"
        className="text px-3 py-2 rounded-md transition duration-300"
      >
        Comments
      </Link>
    </div>
  );
};

export default Home;
