// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='fl'>
      <h1><i className='text-xl text-purple-700'>Welcome to Pixi-Fy!</i></h1>
      <Link
        to="/"
        className=" hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Home
      </Link>
    </div>
  );
};

export default Home;
