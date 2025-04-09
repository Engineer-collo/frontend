import React, { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const api_url = "http://127.0.0.1:5000/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(api_url);
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      }
    };

    fetchPosts();
  }, [posts]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Posts</h2>

      {error && <p className="text-red-500 mb-2">Error: {error}</p>}

      <ul className="list-disc pl-5 space-y-1">
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id} className="">
              {post.content}
            </li>
          ))
        ) : (
          !error && <li>No posts available.</li>
        )}
      </ul>
    </div>
  );
};

export default Posts;
