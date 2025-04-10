// src/components/Posts.jsx
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "", author_id: 1 });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => setPosts([...posts, data]))
      .catch((error) => console.error("Error adding post:", error));
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <h2>Add New Post</h2>
      <form onSubmit={handleAddPost}>
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Title"
          required
        />
        <textarea
          name="body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          placeholder="Body"
          required
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default Posts;
