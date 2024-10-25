import React from 'react'
import './skill.css'
export default function Skill(props) {
    

    return (
        <div id='skill' className='skills'>

            <div className='skill-cont'>

                <div className='skill'>Javascript <span className='js'></span> <i>90%</i> </div>
                <div className='skill'>React JS <span className='rc'></span> <i>80%</i> </div>
                <div className='skill'>HTML & CSS <span className='ht'></span> <i> 95% </i></div>
                <div className='skill'>Node JS<span className='nd'></span> <i> 50% </i> </div>
                <div className='skill'>Express JS <span className='ex'></span> <i> 70% </i> </div>

                <div className='skill'>MongoDB<span className='mn'></span> <i> 80% </i> </div>
                <div className='skill'>Git & Github<span className='gt'></span> <i> 90% </i> </div>
                <div className='skill'>Vercel<span className='vr'></span> <i> 70% </i> </div>
                <div className='skill'>Next JS<span className='nx'></span> <i> 70% </i> </div>

            </div>


            
        </div>
    )
}
