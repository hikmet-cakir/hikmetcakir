import { Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import JavaSE from './components/JavaSE';
import Spring from './components/Spring';

function App() {
  return (
    <div>
        <Route path="/"> <Home/> </Route>
        <Route path="/about-me"> <AboutMe/> </Route>
        <Route path="/javase"> <JavaSE/> </Route>
        <Route path="/spring"> <Spring/> </Route>
    </div>
  );
}

export default App;