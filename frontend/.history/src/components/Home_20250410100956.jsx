// components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1><i className='text-xl text-purple-9'>Welcome to Pixi-Fy!</i></h1>
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
