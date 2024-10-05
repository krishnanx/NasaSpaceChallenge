import { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
 

  return (
    <>
      <ChakraProvider>
        <Navbar/>
      </ChakraProvider>
      
    </>
  )
}

export default App
