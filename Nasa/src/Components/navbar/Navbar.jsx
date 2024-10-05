import React from "react";
import "./Navbar.css";
import { Button, ButtonGroup } from '@chakra-ui/react'




function Navbar() {
  const HandleSignin = () =>{

  }
  return (
    <div id="navContainer">
      <div>

      </div>
      <ul id="list">
        <li>Home</li>
        <li>About</li>
      </ul>
      <div>
      <Button colorScheme='teal' size='md'>
        Login
      </Button>
      <Button colorScheme='teal' size='md'>
        Sign Up
      </Button>
      </div>
    </div>
  );
}

export default Navbar;
