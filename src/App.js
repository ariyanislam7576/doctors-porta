import logo from './logo.svg';
import './App.css';
import { BrowserRouter
    as Router , Switch , Route
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Appoinment from './Pages/Appinment/Appoinment/Appoinment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
    <AuthProvider>
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
         <Route path='/login'>
           <Login></Login>
         </Route>
         <Route path='/register'>
           <Register></Register>
         </Route>
       </Switch>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
