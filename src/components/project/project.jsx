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

export default function Project(props) {
    

    return (
        <div id='project' className='Project-div'>

            <h2>My project</h2>
            


          <div className='project'>

           <div className='work'>
                <img src={tik} alt='tik'></img>
                <div className='name'>Tik-Tac-Toe</div>
                <div className='used'>JS, HTML, CSS, Canvas</div>
                <hr />

                <div className='get'>
                    <button>Demo</button>
                    <button>Source Code</button>
                </div>
           </div>

           <div className='work'>
                <img src={snake} alt='tik'></img>
                <div className='name'>Snake game</div>
                <div className='used'>JS, HTML, CSS, Canvas</div>
                <hr />

                <div className='get'>
                    <button>Demo</button>
                    <button>Source Code</button>
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
                <div className='used'>JS, HTML, CSS, Canvas, React</div>
                <hr />

                <div className='get'>
                    <button>Demo</button>
                    <button>Source Code</button>
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
