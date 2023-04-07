import React, { useState } from 'react'
import LandingPage from './screens/LandingPage'
import SignInPage from './screens/SignInPage'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import Dashboard from './screens/Dashboard'
import Leaderboards from './screens/Leaderboards'
import { Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const path = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => {setIsNavOpen(!isNavOpen)}

  return (
    <>
      {(path.pathname !== "/" && path.pathname !== "/login") && <Navbar isNavOpen={isNavOpen} handleIsNavOpen={toggleIsNavOpen} /> }
      <div className={`flex items-center justify-center ${isNavOpen && "opacity-10 bg-slate-300" }`}>
        <Routes>
          {/* <Route path="/" render={ ( props ) => ( props.location.pathname !== "/") && <Navbar /> } /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </div>
    </>
  )
}

export default App