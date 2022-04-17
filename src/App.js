import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Home/About/About';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import Signup from './Home/Signup/Signup';
import Login from './Login/Login';
import RequireAuth from './RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<RequireAuth>
          <About></About>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
