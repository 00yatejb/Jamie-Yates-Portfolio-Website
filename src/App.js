import React from 'react';
import Navbar from "./components/Navbar/navbar"
import Intro from "./components/Intro/intro"
/*import Projects from*/ 
import Solutions from "./components/Solutions/solutions"
import Work from "./components/Work/work"
import Reviews from "./components/Reviews/reviews"
import Contact from './components/Contact/contact'
import "./App.css"
import "./App.scss"    
import { useState } from "react";   
import Menu from "./components/Menu/menu";
/*import Footer from "./components/Footer/footer"*/
import Icons from "./components/Test Icons/icons"                                      

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
    <div className="sections">
      <Intro/>
      <Work/>
      <Solutions/>
      <Reviews/>
      <div className="contact">
      <Contact/>
      </div>
      <div className="icons">
      <Icons />
      </div>
    </div>
    </div>
  );
}

export default App;
