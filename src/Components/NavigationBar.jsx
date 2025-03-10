import React, { useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <Link to="/">
          <div className="logo">
            <img src="/tasty-byti.png" alt="Tasty Byti Logo" />
          </div>
        </Link> 

        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/restaurant">RESTAURANT</Link></li>
            <li><Link to="/event">EVENT</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/catering">CATERING</Link></li>
            <li><Link to="/reservation">RESERVATION</Link></li>
          </ul>

          <button className="burger-icon" onClick={toggleSidebar} aria-label="Toggle Menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Button buttonText="ORDER NOW" />
        </nav>
      </header>

      {/* Sidebar */}
      <div id="sideBar" className={`sideBar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-icon" onClick={toggleSidebar} aria-label="Close Menu">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <ul className="sideBarUL"> 
          <li><Link to="/" onClick={toggleSidebar}>HOME</Link></li>
          <li><Link to="/restaurant" onClick={toggleSidebar}>RESTAURANT</Link></li>
          <li><Link to="/event" onClick={toggleSidebar}>EVENT</Link></li>
          <li><Link to="/menu" onClick={toggleSidebar}>MENU</Link></li>
          <li><Link to="/catering" onClick={toggleSidebar}>CATERING</Link></li>
          <li><Link to="/reservation" onClick={toggleSidebar}>RESERVATION</Link></li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
