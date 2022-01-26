
import './activities.css'
import Bas from '../../img/bas2-01.jpg'

export default function activities(){
    return(
        <div className='activities'>
            <div className='activities-left'>
                
                <img className='activities-img' src={Bas}/>
               
            </div> 
            <div className='activities-right'>
                <div className='activities-wrapper'>
                    <h1>Basketball competition</h1> 
                    <h3>time of attendance : 2019-2020</h3>
                    To compete in the sport of basketball, what comes from participating is to work
                    with others and to have conversations during practice and contests, including 
                    leadership and followers.
                </div>
                
            </div>
                       
                   

        </div>
    );
}