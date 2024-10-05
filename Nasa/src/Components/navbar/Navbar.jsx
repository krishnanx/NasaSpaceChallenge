import React,{useState} from "react";
import "./Navbar.css";
import { Button, ButtonGroup ,Image,Box} from '@chakra-ui/react'
import { getAuth,signInWithPopup,setPersistence ,browserSessionPersistence,signOut} from "firebase/auth";
import { auth,provider } from "../Firebase/Firebase";



function Navbar() {
  const [email,setEmail] = useState(null) 
  const [user,setUser] = useState(null)
  const [pic,setPic] = useState(null)
  const HandleSignin = async() =>{
    try {
      
      const userCredentials = await signInWithPopup(auth, provider);
      const user = userCredentials.user;
      console.log(user.email)
      console.log(user)
      console.log(user.photoURL)
      if(user){
        setEmail(user.email)
        setUser(user)
        setPic(user.photoURL)
        try {
          setPic(user.photoURL);
          ////console.log(pic)
        } catch (error) {
          //console.log("error",error)
        }
      }
      console.log(pic)
     
  } catch (error) {
    console.log("error:", error)
  }
  
  }
  return (
    <div id="navContainer">
      <div>

      </div>
      <ul id="list">
        <li>Home</li>
        <li>About</li>
      </ul>
      <Box
        display="flex"
        w="300px"
        h="70px"
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection="row"
      >
      {!email?<Button 
        colorScheme='teal' 
        size='md'
        onClick={()=>{HandleSignin()}}
        mr="10px"
        >
        Login
      </Button>:null}
      {!email?<Button 
        colorScheme='teal' 
        size='md'
        mr="10px"
        >
        Sign Up
      </Button>:null}      
      {email!==null?<Image
        src={pic}
        w="60px"
        h="60px"
        borderRadius="100px"
      >

      </Image>:null}
      </Box>
    </div>
  );
}

export default Navbar;
