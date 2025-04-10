// src/components/Likes.jsx
import React, { useEffect, useState } from "react";

const Likes = () => {
  const [likes, setLikes] = useState([]);
  const [newLike, setNewLike] = useState({ user_id: 1, post_id: 1 });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/likes")
      .then((res) => res.json())
      .then((data) => setLikes(data))
      .catch((error) => console.error("Error fetching likes:", error));
  }, []);

  const handleAddLike = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLike),
    })
      .then((res) => res.json())
      .then((data) => setLikes([...likes, data]))
      .catch((error) => console.error("Error adding like:", error));
  };

  return (
    <div>
      <h1>Likes</h1>
      <ul>
        {likes.map((like) => (
          <li key={like.id}>
            <p>User {like.user_id} liked post {like.post_id}</p>
          </li>
        ))}
      </ul>

      <h2>Like a Post</h2>
      <form onSubmit={handleAddLike}>
        <input
          type="number"
          name="post_id"
          value={newLike.post_id}
          onChange={(e) => setNewLike({ ...newLike, post_id: e.target.value })}
          placeholder="Post ID"
          required
        />
        <button type="submit">Like</button>
      </form>
    </div>
  );
};

export default Likes;
