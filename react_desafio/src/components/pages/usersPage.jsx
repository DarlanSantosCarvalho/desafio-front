import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const UserPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => setData(response.data));
  }, []);

  console.log(data);

  return (
    <section>
      {data.map((elements, index) => {
        return (
          <div key={index}>
            <div className="container-data-user">
              <div className="item">
                <label htmlFor="Nome">Name:</label>
                <p>{elements.name}</p>
              </div>
              <div className="item">
                <label htmlFor="Nome">Email:</label>
                <p>{elements.email}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export { UserPage };
