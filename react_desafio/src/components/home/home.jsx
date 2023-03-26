import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-container">
      <div className="container-home">
        <h2>Seja bem vindo ao site de blogs diários</h2>
        <h3>Aqui você pode conversar com quem e sobre o que quiser!</h3>
        <p>(Sem limite de caracteres) </p>
      </div>

      <h1 className="subtitle">Avaliable Services</h1>

      <div className="container-options">
        <div className="options posts">
          <Link to={"/posts"}>
            <h2 className="option">Posts</h2>
          </Link>
        </div>

        <div className="options user">
        <Link to={"/users"}>
            <h2 className="option">Users</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Home };
