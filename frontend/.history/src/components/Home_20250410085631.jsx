import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Pixi-Fy!</h1>
      <p>Your social media platform for connecting and sharing with others.</p>
      <h2>What would you like to do?</h2>
      <ul>
      <Link
        to="/Comments"
        className=" hover:bg-blue-700 px-3 py-2 rounded-md transition duration-300"
      >




        <li><a href="/users">View Users</a></li>
        <li><a href="/posts">See Posts</a></li>
        <li><a href="/comments">Browse Comments</a></li>
        <li><a href="/profiles">Manage Profiles</a></li>
        <li><a href="/likes">View Likes</a></li>
        <li><a href="/follows">See Follows</a></li>
      </ul>
    </div>
  );
};

export default Home;
