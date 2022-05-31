import { Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import JavaSE from './components/JavaSE';
import Spring from './components/Spring';
import Essay from './components/Essay';
import ManagementAuth from './components/management/ManagementAuth';
import ManagementHome from './components/management/ManagementHome';
import ManagementSearchEssay from './components/management/ManagementSearchEssay';
import ManagementAddEssay from './components/management/ManagementAddEssay';
import ManagementUpdateEssay from './components/management/ManagementUpdateEssay';
import ManagementDeleteEssay from './components/management/ManagementDeleteEssay';

function App() {
  return (
    <div>
        <Route path="/home"> <Home/> </Route>
        <Route path="/about-me" component={AboutMe} />  
        <Route path="/javase" component={JavaSE} /> 
        <Route path="/spring" component={Spring} />  
        <Route path="/essay/:essayId" component={Essay} />  

        <Route path="/management-auth" component={ManagementAuth} />  
        <Route path="/management-home" component={ManagementHome} />  
        <Route path="/management-search" component={ManagementSearchEssay} />  
        <Route path="/management-add" component={ManagementAddEssay} />  
        <Route path="/management-update" component={ManagementUpdateEssay} />  
        <Route path="/management-delete" component={ManagementDeleteEssay} />  
    </div>
  );
}

export default App;