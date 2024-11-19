import React from 'react';
import "./project.css"

import snake from "../../asset/snake.png"
import tetris from "../../asset/tetris.png"
import draw from "../../asset/draw.png"
import tik from "../../asset/tik.png"
import arc from "../../asset/archery.png"
import tw  from "../../asset/2048-game.png"
import con from "../../asset/connect-4.png"
import pong  from "../../asset/pong.png"
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Project(props) {

        useEffect(() => {
          // ScrollReveal-ийн тохиргоог хийх
          ScrollReveal().reveal('.reveal', {
            origin: 'bottom',  // Хаанаас илрэхийг заана
            distance: '20px',  // Хэр их зайнаас хөдөлгөхийг заана
            duration: 800,     // Анимацийн хугацаа
            delay: 200,        // Дараалал
            reset: true,       // Хүссэн тохиолдолд дахин давтах
          });
        }, []);
    


    return (
        <div id='project' className='Project-div'>

            <h2>My project</h2>
            

          <div className='project'>

           <div className='work'>
                <img src={tik} alt='tik-tac-toe'></img>
                <div className='name'>Tik-Tac-Toe</div>
                <div className='used'>JS, HTML, CSS, Canvas</div>
                <hr />

                <div className='get'>
                    <button> <a href='https://tik-tac-toe-eta.vercel.app/' target='blank'> Demo </a></button>
                    <button> <a href='https://github.com/Temka24/TikTacToe' target='blank'>Source Code</a></button>
                </div>
           </div>

           <div className='work'>
                <img src={snake} alt='snake'></img>
                <div className='name'>Snake game</div>
                <div className='used'>JS, HTML, CSS, Canvas</div>
                <hr />

                <div className='get'>
                    <button><a href='https://snake-game-weld-nine.vercel.app/' target='blank'>Demo</a></button>
                    <button> <a href='https://github.com/Temka24/Snake-game' target='blank'>Source Code </a></button>
                </div>
           </div>

           <div className='work'>
                <img src={tetris} alt='tik'></img>
                <div className='name'>Tetris game</div>
                <div className='used'>JS, HTML, CSS, Canvas, React</div>
                <hr />

                <div className='get'>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
           </div>

           <div className='work'>
                <img src={draw} alt='tik'></img>
                <div className='name'>Draw app</div>
                <div className='used'>JS, HTML, CSS, Canvas, React</div>
                <hr />

                <div className='get'>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
           </div>

           <div className='work'>
                <img src={con} alt='tik'></img>
                <div className='name'>Connect-4</div>
                <div className='used'>JS, HTML, CSS, Canvas</div>
                <hr />

                <div className='get'>
                    <button> <a href='https://connect-4-orcin-alpha.vercel.app/' target='blank'> Demo </a> </button>
                    <button> <a href='https://github.com/Temka24/Connect-4' target='blank'> Source Code </a> </button>
                </div>
           </div>

           <div className='work'>
                <img src={pong} alt='tik'></img>
                <div className='name'>Pong game</div>
                <div className='used'>JS, HTML, CSS, Canvas, React</div>
                <hr />

                <div className='get'>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
           </div>


           <div className='work'>
                <img src={arc} alt='tik'></img>
                <div className='name'>Archery game</div>
                <div className='used'>JS, HTML, CSS, Canvas, React</div>
                <hr />

                <div className='get'>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
           </div>


           <div className='work'>
                <img src={tw} alt='tik'></img>
                <div className='name'>2048 game</div>
                <div className='used'>JS, HTML, CSS, Canvas, React</div>
                <hr />

                <div className='get'>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
           </div>

        </div>


      </div>
    )
}
