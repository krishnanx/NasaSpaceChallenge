import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Landing from './pages/landing'
function App() {
 

  return (
    <>
      <ChakraProvider>
        <Navbar/>
        <Landing/>
      </ChakraProvider>
      
    </>
  )
}

export default App
