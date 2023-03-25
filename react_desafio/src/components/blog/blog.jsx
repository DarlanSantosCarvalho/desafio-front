import React, { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      {posts.map((post, index) => (
        <div className="container" key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </section>
  );
};

export {Blog};