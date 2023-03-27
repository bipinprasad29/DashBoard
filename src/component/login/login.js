import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ setLogin }) => {
  const [err, setErr] = useState(false);
  const userRef = useRef(),
    passRef = useRef();
  const navigate = useNavigate();

  const formHandler = (e) => {
    if (
      userRef.current.value.toLowerCase() !== "admin" ||
      passRef.current.value !== "@admin"
    ) {
      setErr(true);
    } else {
      setErr(false);
      setLogin(true);
      navigate("/inbox");
    }
  };

  return (
    <div className="loginPage">
      <div className="login">
        <h1>Log-In</h1>

        <div className="inputform">
          <div className="row">
            <label htmlFor="username">Username:-</label>
            <input type="text" placeholder="admin" ref={userRef} />
          </div>
          {err && <span className="loginerr">***Username is incorrect</span>}
        </div>

        <div className="inputform">
          <div className="row">
            <label htmlFor="password">Password:-</label>
            <input type="password" placeholder="@admin" ref={passRef} />
          </div>
          {err && <span className="loginerr"> ***Password is incorrect</span>}
        </div>

        <button onClick={(e) => formHandler(e)}>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
