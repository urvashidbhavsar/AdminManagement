import './App.css'
import Login from './components/Login'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Register from './components/register'
import Home from './components/mainpage/Home'
import Stricklylogin from './components/services/Stricklylogin'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          {/* <Route path='/Home' element={<Stricklylogin />}> */}
          <Route path='/Home' element={<Home />}></Route>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>

      {/* <Login /> */}
      {/* <Register /> */}
    </>
  )
}

export default App
