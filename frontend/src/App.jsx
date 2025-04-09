import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Comments from "./components/Comments";
import Comment from "./Comment";
import Posts from "./components/Posts";

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* Here's your link to Comment page */}
      <div className="p-4">
        <Link to="/Comments" className="text-blue-500 underline">
          Comments
        </Link>

        <Link to="/Comment" className="text-blue-500 underline">
          Comment
        </Link>

        <Link to="/Posts" className="text-blue-500 underline">
          Post
        </Link>

      </div>
      <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/Comment" element={<Comment />} />
        <Route path="/Comments" element={<Comments />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
