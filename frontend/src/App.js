import { Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import JavaSE from './components/JavaSE';
import Spring from './components/Spring';
import Essay from './components/Essay';

function App() {
  return (
    <div>
        <Route path="/home"> <Home/> </Route>
        <Route path="/about-me" component={AboutMe} />  
        <Route path="/javase" component={JavaSE} /> 
        <Route path="/spring" component={Spring} />  
        <Route path="/essay/:essayId" component={Essay} />  
    </div>
  );
}

export default App;