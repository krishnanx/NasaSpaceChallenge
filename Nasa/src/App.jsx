import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Landing from './pages/landing'
import {BrowserRouter as Router,Route,Routes,useLocation} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Protected from './Components/Protected/Protected'
import AuthContext from './Components/contexts/AuthContext'
function App() {
 

  return (
    <>
      <ChakraProvider>
        <AuthContext>
          <Router>
           
              <Navbar/>
              <Routes>  
                <Route path='/' element={<Landing/>}/>
                <Route path='/Dashboard' element={<Dashboard />}/>
                
              </Routes>
            
          </Router>
        </AuthContext>
     
      </ChakraProvider>
      
    </>
  )
}

export default App
