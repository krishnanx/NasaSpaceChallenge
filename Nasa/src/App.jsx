import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Landing from './pages/landing'
import {BrowserRouter as Router,Route,Routes,useLocation} from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Protected from './Components/Protected/Protected'
import AuthContext from './Components/contexts/AuthContext'
import ValuesContext from './Components/contexts/ValuesContext'
import PersonalContext from './Components/contexts/PersonalContext'
import Leaderboard from './pages/Leaderboard/Leaderboard'
function App() {
 

  return (
    <>
      <ChakraProvider>
        <AuthContext>
          <ValuesContext>
            <PersonalContext>
              <Router>
              
                <Navbar/>
                <Routes>  
                  <Route path='/' element={<Landing/>}/>
                  <Route path='/Dashboard' element={<Protected>
                      <Dashboard />
                    </Protected>}/>
                  <Route path='/Leaderboard' element={<Protected><Leaderboard/></Protected>}/>
                  
                </Routes>
          
              </Router>
            </PersonalContext>
            
          </ValuesContext> 
        </AuthContext>
     
      </ChakraProvider>
      
    </>
  )
}

export default App
