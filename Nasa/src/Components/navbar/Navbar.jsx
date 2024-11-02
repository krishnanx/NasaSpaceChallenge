import { Box, Button, Image, useDisclosure } from '@chakra-ui/react';
import { signInWithPopup,signOut } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { db } from '../Firebase/Firebase';
import { addDoc, getDocs, setDoc,collection,doc,onSnapshot} from "firebase/firestore";
import { auth, provider } from "../Firebase/Firebase";
import { useNavigate,useLocation, Navigate } from "react-router-dom";
import {Authentication} from "../contexts/AuthContext"
import "./Navbar.css";
import React,{ useEffect } from 'react';
import { Value } from '../contexts/ValuesContext';
import { Personal } from '../contexts/PersonalContext';
import Cookies from 'js-cookie';
import logo from "../../assets/Images/logo.jpg"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ButtonGroup
} from '@chakra-ui/react'

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling
    });
  };
  const initialFocusRef = React.useRef()
  const [navbarColor, setNavbarColor] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef()
 
  const theme = {
  width: "100%",
  height: "10%",
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
 
  //const[personal,setPersonal] = useContext(Personal)
  const [user,setUser] = useContext(Authentication);
  const [values,setValues,docs,setDocs,data,setData,pdocs,setPDocs,id,setId,body,setBody,sex,setSex,personal,setPersonal,input,setInput,object,setObject] = useContext(Value);
  //const [docs,setDocs] = useState("")
  const [pic,setPic] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();
  const [name,setName] = useState("")
 
 

  const handleScroll = () => {
    if (window.scrollY > 50) {  // Change the value '50' to adjust the scroll threshold
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const addUser = async (email,name) => {
    try {
        const docRef = doc(db, 'users',`${email}`);
        const userData = {
          email:email,
          name:name,
          body:"none",
          sex:"none",
          //FootPrint:parseFloat(0.00) // This will force it to be stored as a double
          
      };
        await setDoc(docRef, userData);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
  useEffect(()=>{
    try{
      console.log(user)
      console.log(email)
      if(user!==null){
        const userDoc = collection(db,'users');
        onSnapshot(userDoc,(snapshot)=>{
          const userList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        if(userList.find(user => user.id ===`${email}`)){
          console.log("user present")
          const userDocRef = doc(db,'users',`${email}`);
          const personalSubcollectionRef = collection(userDocRef,"personal");
          const carbonFootprintSubcollectionRef =collection(userDocRef,'carbonfootprint');
          console.log("loll")
          onSnapshot(userDocRef, (snapshot) => {
            const docs = snapshot
            console.log("pdocs:",docs)
            setDocs(docs);
            //console.log(pdocs)
            //console.log(docs)
            //console.log(docs[0].id)
            setId(docs.id)
            //console.log(docs[0]._document.data.value.mapValue.fields)
            if(docs._document.data.value.mapValue.fields.body.stringValue==="none"){
            
                console.log("lik")
                setInput(0);
                setPersonal(false)
            }
            else{
                console.log("bruj")
                setBody(docs._document.data.value.mapValue.fields.body.stringValue)
                setSex(docs._document.data.value.mapValue.fields.sex.stringValue)
                setPersonal(true)
                }
          })
          
        }
        else{
          //addUser(email,name)
        }
        console.log(userList)
        setObject(userList)
        //console.log(snapshot)
        })
      }
      else{
        // Get the cookie
        console.log("user is null")
        const userDetails = Cookies.get('userDetails');
        if (userDetails) {
            const userD = JSON.parse(userDetails);
            setUser(userD)
            console.log("cookies",userD.displayName); // access username
            console.log("cookies",userD.email);    
            console.log("cookies",userD.photoURL) // access token
            setEmail(userD.email)
            setPic(userD.photoURL)
            setName(userD.displayName)
        }
        else{
          console.log("user cookie not present")
        }
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
  console.log(docs.empty)
  const HandleSignin = async() =>{
    try {
      if(user===null){
        const userCredentials = await signInWithPopup(auth, provider);
        //console.log(userCredentials)
        const users = userCredentials.user;
        console.log(users.email)
        console.log(users)
        console.log(users.photoURL)
        addUser(users.email,users.displayName)
        if(users){
          setEmail(users.email)
          setUser(users)
          setName(users.displayName)
          //setPic(users.photoURL)
          const userDetails = {
            displayName: users.displayName,
            email:users.email,
            photoURL: users.photoURL
          }
          try {
            Cookies.set('userDetails', JSON.stringify(userDetails), { expires: 7, sameSite: 'Strict' });
            console.log("cookies sett")
            setPic(users.photoURL);
            //console.log(pic)
            console.log("hi")
            console.log(pic)
          } catch (error) {
            console.log("error",error)
          }
        }
      }
      else{

      }
      
      
  } catch (error) {
    console.log("error:", error)
  }
  finally{
      
      navigate('/Dashboard')
   

  }
  
  
  
  }
  const Signout = async() => {
    try {
      await signOut(auth).then(()=>{
        setEmail(null)
        setUser(null)
        
        //setCurrentUser(null)
        //console.log("sign out...")
        //document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        //console.log('User signed out and cookie removed.');
        Cookies.remove('userDetails');
        console.log("cookies removed")
        navigate('/')
      })
      
      
    } catch (error) {
      console.log("error:", error)
    }
  }
  return (
    <div id="navContainer" style = {!navbarColor?theme:{background:"#2c2a2a" , transition:"ease-in-out"}}>
      {/*,borderBottom: "2px solid #4CAF50"*/}
      <div
        className='Left_icons'
      >
          <Image 
            
            src={logo} 
            alt="logo" 
            w="70px"
            h="70px"
            borderRadius="60px"
            p="5px"
           />
      </div>
      
      <ul id="list">
        
        {user?<>
          <li onClick={()=>navigate("/")}>Home</li>
          <li onClick={()=>navigate("/Dashboard")}>DashBoard</li>
          <li onClick={()=>navigate("/Leaderboard")}>LeaderBoard</li>
        </>:<>
        <li onClick={scrollToTop}>Home</li>
        <li><a href="#about">About</a></li>
        </>
        }
        
      </ul>
      <Box
        display="flex"
        w="250px"
        h="70px"
        justifyContent="flex-end"
        alignItems="center"
        flexDirection="row"
      >
      {email===null?<Button 
        colorScheme='teal' 
        size='md'
        onClick={()=>{HandleSignin()}}
        mr="10px"
        >
        Login
      </Button>:<></>}
      {email===null?<Button 
        colorScheme='teal' 
        size='md'
        mr="10px"
        >
        Sign Up
      </Button>:<></> }     
      
      </Box>
      <Popover
      //initialFocusRef={initialFocusRef}
      placement='bottom'
      isOpen={isOpen}
      closeOnBlur={false}
      onClose={onClose}
    >
      <PopoverTrigger>
        {email!==null?<Image
          src={user.photoURL?user.photoURL:pic}
          w="60px"
          h="60px"
          borderRadius="100px"
          m="10px"
          ref={btnRef}
          onClick={onOpen}
        >

        </Image>:<></>}
      </PopoverTrigger>
      <PopoverContent color='white' bg='#2c2a2a' borderColor='blue.800'>
       
        <PopoverArrow bg='#2c2a2a' />
       
        <PopoverBody
          h="60px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            size="md"
            colorScheme='teal'
            onClick={()=>{
              onClose()
              Signout()
              //closeOnBlur(true)
             

            }
            }
          >
            Sign out
          </Button>
        </PopoverBody>
       
        </PopoverContent>
      </Popover>
      {/*<Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay  m="0" p="0"/>
        <DrawerContent bgColor="#2c2a2a"  m="0"
              p="0">
          <DrawerCloseButton />
          <DrawerFooter bgColor="transparent">
            <Box
              m="0"
              p="0"
              w="100%"
              h="600px"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Button sx={{margin:"20px"}} size="md" colorScheme='teal'>Sign Out</Button>
            </Box>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>*/}
    </div>
  );
}

export default Navbar;
