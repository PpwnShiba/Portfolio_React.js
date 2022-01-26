import './about.css'
import Me from '../../img/me4-01.jpg'
import {IoLogoGithub } from 'react-icons/io5';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs'

import {MdOutlineMail} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'

export default function about(){
    const style = { color: "#4682B4"}
    return(
        <div className="about">
            <div className='about-left'>
                <img className='about-image' src={Me} />
            </div>

            <div className='about-right'>
                <div className='about-wrapper'>

                    <div className='profile'>
                        <h2 >Profile</h2>
                        <div className='myname'>
                            <div className='name'>Name - Surename</div>
                            Paweennuch Preeda
                        </div>
                        <div className='myname'>
                            <div className='name'>Nickname</div>
                            Pang
                        </div>
                        <div className='myname'>
                            <div className='name'>Gender </div>
                            Female
                        </div>
                        <div className='myname'>
                            <div className='name'>Age</div>
                            21 years old
                        </div>
                        <div className='myname'>
                            <div className='name'>Birthdate </div>
                            23 May 2000
                        </div>
                        <div className='myname'>
                            <div className='name'>Nationality </div>
                            Thai
                        </div>
                    </div>

                    <div className='skills'>
                        <h2 >Skills</h2>
                        <div  className='myname'>  
                            <div className='name'>Skills Language</div> 
                            English, Thai
                        </div>
                        <div  className='myname'>
                            <div className='name'>Skills Language Programing </div> 
                            Python, C, C++, Java, Html5, Css, JS, NodeJS, 
                        MongoDB, bootstrap, ExpressJS, WebAPI, React.js(Beginner),
                        Flutter
                        </div>
                        <div  className='myname'>
                            <div className='name'>Creative tools </div>
                            Photoshop, illustator
                        </div>
                    </div>

                    <div className='contact'>
                        <h2 >Contact</h2>
                        <div  className='myname'>
                            <FaFacebookSquare className='icon' style={style}/> Paweennuch Preeda 
                            
                        </div>
                        <div  className='myname'>
                            <GrInstagram className='icon'/>_pxpwn
                        </div>
                        <div className='myname'><MdOutlineMail className='icon'/>Paweennuch.Preeda@gmail.com</div>
                        <div className='myname'><IoLogoGithub className='icon'/>https://github.com/PpwnShiba</div>
                        <div className='myname'><BsFillTelephoneFill className='icon'/>083-0647842</div>

                    </div>
                    
                   
                </div>
            </div>
        </div>
    );
}