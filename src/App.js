import React, {useEffect} from "react"
import Navbar from "./components/navbar/navbar"
import Home from "./components/home/home"
import Skill from "./components/skill/skill"
import Project from "./components/project/project"
import Contact from "./components/contact/contact"
import "./App.css"

const App = () => {

  useEffect(() => {

    const reveal = () => {
      const revaels = document.querySelectorAll('.reveal');

      for(let i = 0; i < revaels.length; i++){
        var wHeight = window.innerHeight;
        var top = revaels[i].getBoundingClientRect().top;

        if(top < wHeight - 200){
          revaels[i].classList.add('active')
        }
        else{
          revaels[i].classList.remove('active')
        }
      }
    }

    window.addEventListener('scroll', reveal)

    return () => window.removeEventListener('scroll', reveal)
  

  }, [])


 

  return(
    <div>

          <Navbar/>
      <div className="revael">
          <Home/>
      </div>
      <div className="reveal">
          <Skill/>
      </div>
      <div className="reveal">
          <Project/>
      </div>
      <div className="reveal">
          <Contact/>
      </div>

    </div>
  )
}

export default App
