import logo from './logo.svg';
import './App.css';
import { BrowserRouter
    as Router , Switch , Route
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appoinment from './Pages/Appinment/Appoinment/Appoinment';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path='/home'>
           <Home></Home>
         </Route>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/appoinment'>
           <Appoinment></Appoinment>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
