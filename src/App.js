import Intro from './components/intro/intro';
import './App.css';
import About from './components/about/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './components/education/education';
import Activities from './components/activities/activities';
import Java from './components/activities/java';
import Webapp from './components/activities/webapp';
import Mobileapp from './components/activities/mobileapp';
import Predict from './components/activities/predict';

function App() {
  return (
    <div className="App">
      <Intro />
      <About/>
      <Education/>
      <Java/>
      <Mobileapp/>
      <Webapp/>
      <Predict/>
      <Activities/>
    </div>
  );
}

export default App;
