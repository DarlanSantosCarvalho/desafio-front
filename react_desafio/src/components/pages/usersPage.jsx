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
          <div className="container" key={index}>
            <ul>
              <div>
                <label htmlFor="Nome">Name:</label>
                <li>{elements.name}</li>
              </div>
              <div>
              <label htmlFor="Nome">Email:</label>
                <li>{elements.email}</li>
              </div>
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export { UserPage };
