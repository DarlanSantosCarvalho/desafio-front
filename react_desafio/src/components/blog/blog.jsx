import React from "react";
import "./blog.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data));
  }, []);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setComments(response.data));
  }, []);

  const services = [comments, data]

  console.log(services)

  return (
    <section>
      {services.map((elements, index) => {
        return (
          <div className="container" key={index}>
            <div className="userId">
              <p>{data.username}</p>
              <p>{data.email}</p>
            </div>
            <h2>{elements.title}</h2>
            <h2>{elements.body}</h2>
          </div>
        );
      })}
    </section>
  );
};

export default Blog;
