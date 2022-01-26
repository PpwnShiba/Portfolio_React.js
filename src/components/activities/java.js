import './activities.css'
import Java from '../../img/java-01.jpg'

export default function java(){
    return(
        <div className="java">

            <div className='java-left'>
                <img className= "java-img" src={Java}/>
            </div>

            <div className='java-right'>
                <div className='java-wrapper'>
                <h1>Experience Project & activities</h1>
                   <h2>The Book Store Application</h2> 
                   
                   <h3>Programming Language : JAVA & SQL</h3>
                   <div className='desc'>The Book Store Application is my term projct for my first year course
                   "Object-Oriented Programming and Database Systems". this application has been 
                   created to help people who would like to sell second hand books to other.
                   my main responsibility for this project are planning and programming
                    </div>
                </div>
            
            </div>
        </div>
    );
}