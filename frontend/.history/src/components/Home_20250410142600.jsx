// components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className=''>
      <h1><i className='text-xl text-purple-700'>Welcome to Pixi-Fy!</i></h1>
      <Link
        to="/Comments"
        className=" text-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Comments
      </Link>

      <Link
        to="/Profiles"
        className=" text-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Profiles
      </Link>
      <Link
        to="/Posts"
        className=" text-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Posts
      </Link>
      <Link
        to="/Profiles"
        className=" text-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Profiles
      </Link>

      <Link
        to="/Profiles"
        className=" text-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Profiles
      </Link>
      <Link
        to="/Profiles"
        className=" text-blue-700 px-3 py-2 rounded-md transition duration-300"
      >
        Profiles
      </Link>



    </div>
    </>
  );
};

export default Home;
