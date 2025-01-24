import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Stricklylogin = () => {
  const auth = localStorage.getItem("loginuser");
  return auth ? <Outlet /> : <Navigate to="/" />
}

export default Stricklylogin
