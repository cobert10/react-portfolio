import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import WelcomeSection from './WelcomeSection'; 
import AboutMe from './AboutMe'
import Services from './Services'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './Home.css'


function Home() {
  return (
          <>
            <Navbar/>
            <Sidebar/>
            <WelcomeSection/>
            <AboutMe/>  
            <Services/>
            <Resume/>
            <Portfolio/>
            <Contact/>
          </>
        )
}

export default Home