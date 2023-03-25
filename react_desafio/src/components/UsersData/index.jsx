import React from "react";
import "./index.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DataUser = () => {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data));
  }, []);

  console.log(user);

  const userData = [user];

  return (
    <section>
      {userData.map((elements, index) => {
        return (
          <div className="container-container" key={index}>
            <div className="container-user">
              <div className="item">
                <label htmlFor="#">Name:</label>
                <p>{elements.name}</p>
              </div>
              <div className="item">
                <label htmlFor="#">Email:</label>
                <p>{elements.email}</p>
              </div>
              <div className="item">
                <label htmlFor="#">Phone:</label>
                <p>{elements.phone}</p>
              </div>
              <div className="item">
                <label htmlFor="#">Username:</label>
                <p>{elements.username}</p>
              </div>
              <div className="item">
                <label htmlFor="#">Website:</label>
                <p>{elements.website}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export { DataUser };
