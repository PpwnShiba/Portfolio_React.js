import './activities.css'
import Flutter from '../../img/flutter-01.jpg'

export default function mobileapp(){
    return(
        <div className="mobileapp">

            <div className='mobileapp-left'>
                <div className='mobileapp-wrapper'>
                    <h1>Famfam Application</h1>
                   <h3>Programming Language : Flutter </h3>
                   Famfam Application is my current project for course  "Software Engineering" 
                   Famfam is a family-friendly mobile app that adds more interest to the app 
                   and is easier to use than a regular app suitable for both young and old people. 
                   my main role in my team is developer and also design application.
                  
                </div>
            
            </div>
            <div className='mobileapp-right'>
                <img className='mobileapp-img' src={Flutter} />
            </div>
        </div>
    );
}