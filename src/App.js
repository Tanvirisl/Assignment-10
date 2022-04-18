import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import About from './Home/About/About';
import CheckOut from './Home/CheckOut/CheckOut';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import Signup from './Home/Signup/Signup';
import Login from './Login/Login';
import RequireAuth from './RequireAuth/RequireAuth';
import ServiceDetail from './ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service/:servicesId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
