import React from "react";
import "./main.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
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
      .then((response) => setComments(response.data.slice(0, 10)));
  }, []);

  return (
    <section>
      {comments.map((elements, index) => {
        console.log(elements);
        return (
          <div className="container" key={index}>
            <h2>{elements.title}</h2>
            <h2>{elements.body}</h2>


          </div>
        );
      })}
    </section>
  );
};

export default Main;
