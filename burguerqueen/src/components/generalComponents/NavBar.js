import React from "react";
import "../../../src/stylesheets/TakeOrder.css";

function NavBar() {
  return (
    <nav className="superiorNav">
      <img
        className="logo-logout"
        src={require("../../../src/images/logout.png")}
        alt="Logout"
      />
      <button className="logout-button">Logout</button>
      <img
        className="logo-waiter-layout"
        src={require("../../../src/images/queen.png")}
        alt="Logo"
      />
    </nav>
  );
}

export default NavBar;
