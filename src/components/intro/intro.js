import './intro.css'
import Me from '../../img/me-01.png'


export default function intro(){
    return(

        <div className="intro">
          
          <div className="intro-left">
            <div className='intro-left-wrapper'>

              <h2 className='intro-i'>Hello, My name is</h2>
              <h1 className='intro-name'>Paweennuch Preeda</h1>

              <div className='intro-title'>
                <div className='intro-title-wrapper'>
                  <div className='intro-title-item'>Web Developer</div>
                  <div className='intro-title-item'>Front-End Developer</div>
                  <div className='intro-title-item'>Back-End Developer</div>
                  {/* <div className='intro-title-item'></div> */}
                  <div className='intro-title-item'>Tester</div>
                </div>
              </div>

              <div className='intro-desc'>
              I am third year student from King Mongkut's University of Technology Thonburi Bachelor of Science
               ( Applied Computer Science ) I would like to improve 
               my skill as a software developer from the knowledge and experienced and Seek a 
               challenging Experience with Internship Program to expand my learnings, knowledge, and skills. 
              
              </div>

            </div>

          </div>
          <div className="intro-right">
            <img src={Me} className='intro-img'/>
          </div>
        </div>
    );
}