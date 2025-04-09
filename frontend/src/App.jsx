import React from "react";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
  
import Navbar from "./Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Comments from "./components/Comments";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import Likes from "./components/Likes";

import Home from "./components/Home";
import Comment from "./Comment";

function App() {
  return (
    <Router>
      <Navbar/>



      <Routes>
          <Route path="/Likes" element={<Likes />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home/>}/>
          <Route path="Comment" element={<Comment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
