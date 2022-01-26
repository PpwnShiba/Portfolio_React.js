import './activities.css'
import Web from '../../img/web-01.jpg'

export default function webapp(){
    return (
        <div className="webapp">
            <div className='webapp-left'>
                <img className='webapp-img' src={Web} />
            </div>
            <div className="webapp-right">
                <div className='webapp-wrapper'>
               <h1>Movies & Tickets Wep Application</h1> 
                   
                   <h3>Programming Laguage : NodeJS, MongoDB, HTML, CSS, JS</h3> 
                    Movies & tickets Web Application is my second year term project for course 
                   "WebProgramming". This web application was created to be able to look for movies,
                   showtime, and reserve tickets the desired movie tickets. my main responsibility
                   are fullstack developer and design structure of website.
                </div>
           
            </div>
        </div>
    );
}