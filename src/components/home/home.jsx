import React from 'react'
import './home.css'
import pro from "../../asset/pro.png"

export default function Home(props) {
    

    return (
        <div id='home' className='home'>

            <div className='header'>
                <h1>Hi, It's <span>Temka</span></h1>
                <div className='anime'>I'm a <span></span></div>
    
                <div className='me'>
                <p>I'm a passionate and driven software engineer specializing in Fullstack development. I'm 
                    currently pursuing my degree in Software Engineering at the National University of Mongolia, while also 
                    working on personal projects to deepen my expertise in web 
                    development. My aim is to build solutions that not only function efficiently but also provide a great user experience. 
                    I'm also working towards becoming a successful freelance developer, and I'm always looking
                    for opportunities to grow, collaborate, and challenge myself in the tech world.
                </p>
                </div>

                <div class="social-icons">
                    <i class='bx bxl-linkedin'></i>
                    <i class='bx bxl-github'></i>
                    <i class='bx bxl-instagram'></i>
                    <i class='bx bxl-twitter'></i>
                </div>

               <div className='btn'> 
                    <button><i class='bx bxs-download bx-rotate-0' ></i>resume</button>
                    <button className='cnt'>Contact</button>
               </div>
                
            </div>

            <img src={pro} alt="pro" />
            
        </div>
    )
}
