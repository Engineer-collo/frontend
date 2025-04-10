import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Comments from './components/Comments'
import Follows from './components/Follows'
import Home from './components/Home'
import Likes from './components/Likes'
import




const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/users">Users</a></li>
              <li><a href="/posts">Posts</a></li>
              <li><a href="/comments">Comments</a></li>
              <li><a href="/profiles">Profiles</a></li>
              <li><a href="/likes">Likes</a></li>
              <li><a href="/follows">Follows</a></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/follows" element={<Follows />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
