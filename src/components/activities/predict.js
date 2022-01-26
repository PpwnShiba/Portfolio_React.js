
import './activities.css'
import Predict from '../../img/predict-01.jpg'

export default function predict(){
    return(
        <div className='predict'>
            <div className='predict-left'>
                <div className='predict-wrapper'>
                   <h1>Stock Prediction</h1> 
                   <h3>Programming Language: Python</h3>
                   Stock Prediction is my third year term project for course "Data Science". 
                   This project used knowledge from class to makea stock prediction to predict 
                   the tendency of stock will likely up or down by using existing data and comparing 
                   with actual data by accuracy score and comparison graph.
                </div>
            </div> 
            <div className='predict-right'>
                <img className='predict-img' src={Predict}/>
            </div>
           
                       
                   

        </div>
    );
}