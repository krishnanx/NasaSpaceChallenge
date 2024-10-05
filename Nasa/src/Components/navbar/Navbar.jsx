import React from "react";
import "./Navbar.css";





function Navbar() {
  return (
    <div id="navContainer">
      <ul id="list">
        
        <li>Home</li>
        <li>About</li>
        <li><button>Login</button></li>
        <li><button>SignUp</button></li>
      </ul>
    </div>
  );
}

export default Navbar;
