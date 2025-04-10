// src/components/Posts.jsx
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Posts</h1>
      <div className="space-y-6 w-full max-w-2xl">
        {posts.map((post) => (
          <div key={post.id} className="p-6 bg-white border rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-center mb-2">{post.title}</h2>
            <p className="text-gray-700 text-center">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
