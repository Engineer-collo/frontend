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
    <div className="justify-cent">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
