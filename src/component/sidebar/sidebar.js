import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ toggle }) => {
  const [expand, setExpand] = useState([false, false, false]);

// expanding closing sidemenu item logic
  const expandClose = (arg) => {
    setExpand(() =>
      expand.map((e, i) =>
        i === arg ? (e === true ? (e = false) : (e = true)) : (e = false)
      )
    );
  };

  return (
    <div className={`sidebar ${toggle}`}>
      
    <ul>
        <li>
          <NavLink to="/composer">
            <div className="bar">
              <i className="fa-solid fa-square-plus box awesome"></i>Composer
            </div>
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/inbox">
            <div className="bar">
              <i className="fa-solid fa-inbox  box awesome"></i>Inbox
            </div>
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/today">
            <div className="bar">
              <i className="fa-regular fa-calendar-days box awesome"></i>Calendar
            </div>
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/calculator">
            <div className="bar">
              <i className="fa-solid fa-calculator box awesome"></i>Calculator
            </div>
          </NavLink>
        </li>

        <li onClick={() => expandClose(0)}>
          {expand[0] === false ? (
            <i className="fa-solid fa-angle-down awesome"></i>) : 
            (<i class="fa-solid fa-angle-up awesome" 
               style={{ color: "blue" }}></i>)}
            Faviourates
        </li>

        <ul className={expand[0] === false ? "hide" : ""}>
          <li>
            <NavLink to="/highest">
              <div className="bar">
                <i className="fa-solid fa-fire-flame-curved nested "
                  style={{ color: "red" }}></i>
                  Highest
              </div>
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/recurring">
              <div className="bar">
                <i className="fa-solid fa-fire-flame-curved nested "
                  style={{ color: "orange" }}></i>
                  Recurring Task
              </div>
            </NavLink>
          </li>
        </ul>

        {/* condition for opening closing sidemenu item */}
        <li onClick={() => expandClose(1)}>
          {expand[1] === false ? (<i className="fa-solid fa-angle-down awesome"></i>):
          (<i class="fa-solid fa-angle-up awesome" style={{ color: "blue" }}></i>)}
          Personal
        </li>

        <ul className={expand[1] === false ? "hide" : ""}>
          <li>
            <NavLink to="/my">
              <div className="bar">
                <i className="fa-solid fa-circle circle nested"></i>
                My
              </div>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/family">
              <div className="bar">
                <i className="fa-solid fa-user  circle nested"></i>
                Family
              </div>
            </NavLink>
          </li>
        </ul>

        <li onClick={() => expandClose(2)}>
          {expand[2] === false ? (
            <i className="fa-solid fa-angle-down awesome"></i>):
             (<i class="fa-solid fa-angle-up awesome"
              style={{ color: "blue" }}></i>)}
            Work
        </li>

        <ul className={expand[2] === false ? "hide" : null}>
          <li>
            <i className="fa-solid fa-user   blue nested"></i>New Project
          </li>
          <li>
            <i className="fa-solid fa-user   green nested"></i>Working On
          </li>
          <li>
            <i className="fa-solid fa-user  yellow nested"></i>Completed
          </li>
        </ul>
       
       
        <li>
          <NavLink to="/game">
            <div className="bar">
              <i className="fa-solid fa-gamepad  awesome"></i>Fun Zone
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
