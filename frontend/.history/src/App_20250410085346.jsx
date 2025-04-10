import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Comments from './components/Comments';
import Follows from './components/Follows';
import Home from './components/Home';
import Likes from './components/Likes';
import Login from './components/Login';
import Posts from './components/Posts';
import Profiles from './components/Profiles';
import Signup from './components/Signup';
import Users from './components/Users';
import Navbar from './Navbar'; // Optional if you're using a separate Navbar component

const App = () => {
  return (
    <Router>
      <div className="app-container">
  
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/follows" element={<Follows />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
