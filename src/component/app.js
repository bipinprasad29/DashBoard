import React, { useState, useEffect } from "react";
import "./app.css";
import Today from "./today/today";
import Inbox from "./inbox/inbox";
import { Routes, Route } from "react-router-dom";
import Navbar from "./nav/navbar";
import Sidebar from "./sidebar/sidebar";
import Composer from "./composer/composer";
import Error from "./Error";
import Login from "./login/login";
import Game from "./game/game";
import TicTac from "./game/tictac/tictac";
import Guessno from "./game/guessno/guessno";
import Calculator from "./calculator/calculator";

const App = () => {
  
  const [login, setLogin] = useState(true);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("data")) ?? []
  );
  const [editData, setEditData] = useState([]);
  const [toggle, setToggle] = useState("show");

  useEffect(() => localStorage.setItem("data", JSON.stringify(todos)), [todos]);

  return (
    <>
      {login && (
        <Navbar
          setToggle={setToggle}
          toggle={toggle}
          login={login}
          setLogin={setLogin}
        />
      )}
      <div className="main-page">
        {login && <Sidebar toggle={toggle} />}
     
        <div className="clicked__sidebar__Content">
          <Routes>
            <>
              <Route exact path="/" element={<Login setLogin={setLogin} />} />
            
              {login ? (
                <>
                  <Route
                    exact
                    path="/inbox"
                    element={
                      <Inbox
                        todos={todos}
                        setTodos={setTodos}
                        editData={editData}
                        setEditData={setEditData}
                      />
                    }
                  />
                  <Route
                    exact
                    path="/composer"
                    element={
                      <Composer
                        todos={todos}
                        editData={editData}
                        setEditData={setEditData}
                        setTodos={setTodos}
                      />
                    }
                  />
                  <Route exact path="/today" element={<Today />} />
                  <Route exact path="/calculator" element={<Calculator />} />
                  <Route exact path="/game" element={<Game />} />
                  <Route exact path="/game/tictac" element={<TicTac/>} />
                  <Route exact path="/game/guessno" element={<Guessno/>} />
                




                </>
              ) : null}
              <Route path="*" element={<Error />} />
            </>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
