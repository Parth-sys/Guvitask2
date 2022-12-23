
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap';
import Signup from './Screens/Signup';
import Login from './Screens/Login';
import Profile from './Screens/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route  path="/"  element={<Signup></Signup>}  ></Route>
         <Route path="/Login"  element={<Login></Login>}></Route>
         <Route path="/profile" element={<Profile></Profile>}></Route>
       </Routes>
      
      </BrowserRouter>



    </div>
  );
}

export default App;
