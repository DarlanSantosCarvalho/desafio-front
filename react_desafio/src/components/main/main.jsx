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

  const [coment, setComent] = useState([]);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => setComent(response.coment));
  }, []);

  console.log(coment)

  console.log(data)

  return (
    <div className="container-comentario">
      <div className="userId">
        <h2>{data[7]?.username}</h2>
        <h2>{data[7]?.email}</h2>
      </div>

      <div className="titleComent">
        <h2>Titulo</h2>
      </div>

      <div className="comentario">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laborum et nisi molestiae delectus. Quasi, impedit sapiente ratione
          qui enim eos. Reprehenderit nihil consequatur numquam laborum
          doloremque asperiores voluptatibus fuga!
        </h1>
      </div>
    </div>
  );
};

export default Main;
