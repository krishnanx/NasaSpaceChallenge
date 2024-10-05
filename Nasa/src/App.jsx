import { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import './App.css'

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
