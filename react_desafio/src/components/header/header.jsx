import React from "react";
import "./header.css";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to={"/"}><h2 className="click-home">Rettiwt</h2></Link>
        <h2>Seu site de blogs</h2>
      </div>
    </nav>
  );
};

export default Header;
