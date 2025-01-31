import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from './components/Login'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Register from './components/register'
import Home from './components/mainpage/Home'
import Stricklylogin from './components/services/Stricklylogin'
import Addproduct from './components/mainpage/Product/Addproduct';
import Showproduct from './components/mainpage/Product/Showproduct';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Home/*' element={<Stricklylogin />}>
            <Route index element={<Home />} />
            <Route path="Addproduct" element={<Addproduct />} />
            <Route path="Showproduct" element={<Showproduct />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Login /> */}
      {/* <Register /> */}
    </>
  )
}

export default App
