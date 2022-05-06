import { Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
        <Route path="/"> <Home/> </Route>
        <Route path="/about-me"> <AboutMe/> </Route>
    </div>
  );
}

export default App;