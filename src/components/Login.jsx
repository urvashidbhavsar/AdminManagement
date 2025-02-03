import React, { useState } from 'react'
import './style.css'
import { FloatingLabel, Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  localStorage.setItem("admincredential", JSON.stringify({
    username: "admin",
    password: "admin@123"
  }))
  const storedItem = JSON.parse(localStorage.getItem("admincredential"))

  const checkValidate = (e) => {
    e.preventDefault();  // Prevents page reload
    if (storedItem.username === input.username && storedItem.password === input.password) {
      localStorage.setItem("loginuser", input.username)
      navigate("/Home")
    } else {
      alert("Invalid Values!!!");
    }
  };


  return (
    <>
      <Container>
        <h1 className='border-danger border-bottom border-4 py-2 text-center'>Product Management</h1>
        <div className='shadow p-lg-5 p-sm-3 p-2 formblock'>
          <form onSubmit={checkValidate}>
            <h2 className='text-center pb-3'>Login</h2>
            <div className='row g-3'>
              <div className="col-12">
                <FloatingLabel controlId="floatingInput" label="Username">
                  <Form.Control type="text" placeholder="Username" name='username' required value={input.username} onChange={handleInputChange} />
                </FloatingLabel>
              </div>
              <div className="col-12">
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" name='password' required value={input.password} onChange={handleInputChange} />
                </FloatingLabel>
              </div>
              <div className="col-12 text-center">
                <Button variant='primary' type='submit'>Login</Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Login
