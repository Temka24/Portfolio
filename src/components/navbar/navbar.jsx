import React, {useState} from 'react';
import "./navbar.css";
import logo from "../../asset/logo.png";
import {Link} from 'react-scroll'

export default function Navbar(props) {

    var [menu, setMenu] = useState('home')
    var [open, setOpen] = useState(false)

    function chng(){
        setOpen(!open)
    } 
    
    return (
      <div className='conta'>

           <div className='men' onClick={chng}><i class='bx bx-menu'></i> </div> 


        <div className={`navbar ${open === true ? 'okey' : ''}`}>
            <img src={logo} alt=''></img>

            <ul className='list'>
                <li > <Link to='home' spy={true} smooth={true} duration={500} ><span className={menu === 'home' ? 'add' : ''} onClick={() => setMenu('home')}> Home </span> </Link>  </li>
                <li > <Link to='skill' spy={true} smooth={true} duration={500} ><span className={menu === 'skill' ? 'add' : ''}  onClick={() => setMenu('skill')}>Skill </span> </Link> </li>
                <li > <Link to='project' spy={true} smooth={true} duration={500} ><span className={menu === 'project' ? 'add' : ''}  onClick={() => setMenu('project')}>Project </span> </Link></li>
                <li > <Link to='contact' spy={true} smooth={true} duration={500} ><span className={menu === 'contact' ? 'add' : ''}  onClick={() => setMenu('contact')}>Contact </span> </Link></li>
            </ul>
        </div>

        </div>
    )
}
