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
      
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/users">Users</Link></li>
              <li><Link to="/posts">Posts</Link></li>
              <li><Link to="/comments">Comments</Link></li>
              <li><Link to="/profiles">Profiles</Link></li>
              <li><Link to="/likes">Likes</Link></li>
              <li><Link to="/follows">Follows</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
          </nav>
        </header>

        
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
