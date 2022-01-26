import './education.css'
import kmutt from '../../img/kmutt-01.jpg'

export default function education(){
    return(
        <div className="education">
            
            <div className='education-left'>
                <div className='education-wrapper'>
                <h1>Education</h1>
                <ul class="education-line">
                    <li>
                        <div className='university'>
                            <div className='box'>Universe</div>
                            2019 - Present
                        </div>
                        <div className='line'></div> 
                        <span>
                            <div className='se-name'>King Mongkut's University of Technology Thonburi
                            </div>
                            Bachelor of Applied Computer Science 
                            <br/>GPAX : 3.23
                        </span>
                    </li>    
                    <li>
                        <div className='senior'>
                            <div className='box'>Senior High School </div>
                            2016-2018 
                            
                        </div>
                        <div className='line'></div>
                        <span>
                            <div className='se-name'>Chonkanyanukoon School</div>
                            Science and Math <br/>
                            GPA : 3.75 
                        </span>
                    </li>
                    <li>
                        <div className='junior'>
                            <div className='box'>junior high school </div>
                            2014-2016
                            
                        </div>
                        <div className='line'></div>
                        <span>
                            <div className='se-name'>Sriracha School </div>
                            
                            GPA : 3.75 
                        </span>
                    </li>
                </ul>
                </div>
               
            </div>
           
            <div className='education-left'>
                <img className='img' src={kmutt}/>
            </div>
        </div>
    );
}