import React from 'react'
import Img from '../../assets/images/U.png'
import { useNavigate } from 'react-router-dom';
import List from '../mainpage/List'

const Navbar = () => {
  const navigate = useNavigate();
  const uservalue = JSON.parse(localStorage.getItem("admincredential"));
  const logout = () => {
    localStorage.removeItem("loginuser")
    navigate("/");
  }
  return (
    <>
      <div className="sidebar">
        <div className='p-4'>
          <div className='text-center'>
            <img src={Img} alt="" height={70} width={70} className='rounded-circle' />
          </div>
          <div className='d-flex gap-3 justify-content-center align-items-center py-3'>
            <h4 className='m-0 text-center'>Hello, {uservalue.username}</h4>
            <button className='btn-sm btn btn-danger' onClick={logout}>Logout</button>
          </div>
          <ul className='list-unstyled m-0 p-0 py-3'>
            <List />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
