import { useState, useEffect } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const api_url = "http://127.0.0.1:5000/comments"; 

  useEffect(() => {
    fetch(api_url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching data");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setComments(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
<div className="p-4">
  <h2 className="text-xl font-bold mb-2">Post comments</h2>
  <ul className="list-disc pl-5 space-y-1">
    {comments.length > 0 ? (
      comments.map((comment) => (
        <li key={comment.id} className="">
          {comment.post_id}
        </li>
      ))
    ) : (
      <li>No comments available.</li>
    )}
  </ul>
</div>


  );
};

export default Comments;
