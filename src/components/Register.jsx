import React from 'react'
import './style.css'
import { FloatingLabel, Form, Button, Container } from 'react-bootstrap';


const register = () => {
  return (
    <>
      <Container>
        <h1 className='border-danger border-bottom border-4 py-2 text-center'>Product Management</h1>
        <div className='shadow p-lg-5 p-sm-3 p-2 registerblock'>
          <form action="">
            <h2 className='text-center pb-3'>Register</h2>
            <div className='row g-3'>
              <div className="col-12">
                <Form.Control type="text" placeholder="Username" required />
              </div>
              <div className="col-12">
                <Form.Control type="text" placeholder="Email id" required />
              </div>
              <div className="col-12">
                <Form.Control type="text" placeholder="Password" required />
              </div>
              <div className="col-12 text-center">
                <Button variant='primary' type='submit'>Register</Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </>
  )
}

export default register
