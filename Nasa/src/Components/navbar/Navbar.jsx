import { Box, Button, Image } from '@chakra-ui/react';
import { signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { auth, provider } from "../Firebase/Firebase";
import { useNavigate,useLocation } from "react-router-dom";
import {Authentication} from "../contexts/AuthContext"
import "./Navbar.css";



function Navbar() {
  const theme = {
  width: "100%",
  height: "100%",
  background: `
    radial-gradient(circle farthest-side at 0% 50%, #282828 23.5%, rgba(255, 170, 0, 0) 0) 21px 30px,
    radial-gradient(circle farthest-side at 0% 50%, #2c3539 24%, rgba(240, 166, 17, 0) 0) 19px 30px,
    linear-gradient(#282828 14%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 85%, #282828 0) 0 0,
    linear-gradient(150deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0,
    linear-gradient(30deg, #282828 24%, #2c3539 0, #2c3539 26%, rgba(240, 166, 17, 0) 0, rgba(240, 166, 17, 0) 74%, #2c3539 0, #2c3539 76%, #282828 0) 0 0,
    linear-gradient(90deg, #2c3539 2%, #282828 0, #282828 98%, #2c3539 0%) 0 0 #282828`,
  backgroundSize: "40px 60px"
}  
  const [email,setEmail] = useState(null) 
  const [user,setUser] = useContext(Authentication);
  const [pic,setPic] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();
  const HandleGetStarted = () =>{
    if(email){
        navigate("/Dashboard")
    }
    else{
      HandleSignin()
      navigate("/Dashboard")
    }
  }
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
            console.log(pic)
        } catch (error) {
          console.log("error",error)
        }
      }
      
      
  } catch (error) {
    console.log("error:", error)
  }
  
  }
  return (
    <div id="navContainer" style = {theme}>
      <div>

      </div>
      <ul id="list">
        <li>Home</li>
        <li>About</li>
        {!email?<Button
          colorScheme='teal'
          size = "md"
          onClick={()=>{
            HandleGetStarted()
          }}
        >
          Get Started
        </Button>:null}
      </ul>
      <Box
        display="flex"
        w="300px"
        h="70px"
        justifyContent="flex-end"
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
        m="10px"
      >

      </Image>:null}
      </Box>
    </div>
  );
}

export default Navbar;
