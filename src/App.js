import React from "react"
import Navbar from "./components/navbar/navbar"
import Home from "./components/home/home"
import Skill from "./components/skill/skill"
import Project from "./components/project/project"
import Contact from "./components/contact/contact"
import "./App.css"


const App = () => {

 
  return(
    <div>
          <Navbar/>   
          <Home/>    
          <Skill/>  
          <Project/>
          <Contact/>
    </div>
  )
}

export default App
