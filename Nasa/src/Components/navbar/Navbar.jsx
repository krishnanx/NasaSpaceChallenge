import { Box, Button, Image } from '@chakra-ui/react';
import { signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { db } from '../Firebase/Firebase';
import { addDoc, getDocs, setDoc,collection,doc,onSnapshot} from "firebase/firestore";
import { auth, provider } from "../Firebase/Firebase";
import { useNavigate,useLocation } from "react-router-dom";
import {Authentication} from "../contexts/AuthContext"
import "./Navbar.css";
import React,{ useEffect } from 'react';
import { Value } from '../contexts/ValuesContext';
import { Personal } from '../contexts/PersonalContext';


const Navbar = () => {
 
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
 
  const[personal,setPersonal] = useContext(Personal)
  const [user,setUser] = useContext(Authentication);
  const [pic,setPic] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();
  const personalSubcollectionRef = collection(db, 'Database', `${email}`, 'personal');
  const carbonFootprintSubcollectionRef = collection(db, 'Database',` ${email}`, 'carbon footprint');
  useEffect(()=>{
    try{
      if(user!==null){
      onSnapshot(personalSubcollectionRef, (snapshot) => {
        const docs = snapshot.docs
  
        console.log(docs[0]._document.data.value.mapValue.fields)
        setPersonal(docs[0]._document.data.value.mapValue.fields)
       
        
        
        ////console.log(todo)
      })
      }
    }
    catch(error){
      console.log(error)
    }
    
   },[user])
 
  const HandleGetStarted = () =>{
    if(email){
     
    }
    else{
      try{
        HandleSignin()
          
        
      }
      catch(error){
        console.log(error)
      }
      
    }
  }
  const HandleSignin = async() =>{
    try {
      
      const userCredentials = await signInWithPopup(auth, provider);
      //console.log(userCredentials)
      const users = userCredentials.user;
      console.log(users.email)
      console.log(users)
      console.log(users.photoURL)
      if(users){
        setEmail(users.email)
        setUser(users)
        //setPic(users.photoURL)
        
        try {
          setPic(users.photoURL);
          //console.log(pic)
          console.log("hi")
          console.log(pic)
        } catch (error) {
          console.log("error",error)
        }
      }
      
      
  } catch (error) {
    console.log("error:", error)
  }
  finally{
      
      navigate('/Dashboard')
   

  }
  
  }
  return (
    <div id="navContainer" style = {theme}>
      <div
        className='Left_icons'
      >

      </div>
      <img id='logo' src="./newlogo.jpg" alt="logo" />
      <ul id="list">
        
        <li>Home</li>
        <li><a href="#about">About</a></li>
       
      </ul>
      <Box
        display="flex"
        w="250px"
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
