import React from "react";
import "../blog/blog.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comment = () => {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => setComments(response.data));
  }, []);

  return (
    <section>
      {comments.map((elements, index) => {
        //console.log(elements)
        return (
          <div className="container" key={index}>
            <h2>{elements?.name}</h2>
            <h2>{elements?.body}</h2>
          </div>
        );
      })}
    </section>
  );
};

export { Comment };
