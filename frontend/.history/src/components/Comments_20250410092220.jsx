// src/components/Comments.jsx
import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ body: "", post_id: 1 });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/comments")
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  const handleAddComment = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then((data) => setComments([...comments, data]))
      .catch((error) => console.error("Error adding comment:", error));

      retForn()
  };

  return (
    <div>
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>

      <h2>Add New Comment</h2>
      <form onSubmit={handleAddComment}>
        <textarea
          name="body"
          value={newComment.body}
          onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          placeholder="Comment"
          required
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default Comments;
