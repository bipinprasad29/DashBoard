import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = ({ setToggle, toggle, login, setLogin }) => {
  const togglefun = (e) => {
    setToggle(() => (toggle === "show" ? "hide" : "show"));
  };

  const navigate = useNavigate();

  const clickHandle = () => {
    if (login) {
      navigate("/");
      setLogin(false);
    }
  };
  return (
    <div className="nav">
      <div>
        {true && (
          <i
            class="fa-solid fa-bars hamBurrger"
            onClick={(e) => togglefun(e)}
          ></i>
        )}
        <span className="logo">DashBoard</span>
      </div>
      <ul className="navbar">
        <li>
          <i
            onClick={() => navigate("/composer")}
            className="fa-solid fa-plus"
          ></i>
        </li>
        <li onClick={()=> clickHandle()}>{login ? "LogOut" : "LogIn"}</li>
      </ul>
    </div>
  );
};

export default Navbar;
