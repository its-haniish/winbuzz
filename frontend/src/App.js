import React, { useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import BottomNavbar from './components/BottomNavbar'
import { HiOutlineHome } from "react-icons/hi2";
import LoginScreen from './screens/LoginScreen';
import ForgetScreen from './screens/ForgetScreen';
import SideBar from './components/SideBar';


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showForget, setShowForget] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);


  return (
    <>

      {
        showSideBar ?
          <SideBar setShowSideBar={setShowSideBar} />
          : null
      }
      {
        showForget ?
          <ForgetScreen setShowLogin={setShowLogin} setShowForget={setShowForget} />
          : null
      }
      <HomeScreen setShowLogin={setShowLogin} setShowSideBar={setShowSideBar} />
      <BottomNavbar />
      <div className='bottom-home'>
        <HiOutlineHome size="1.3rem" />
      </div>
      {
        showLogin ?
          <LoginScreen setShowLogin={setShowLogin} setShowForget={setShowForget} />
          : null
      }

    </>
  )
}

export default App