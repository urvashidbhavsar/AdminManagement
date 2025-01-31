import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navcomponent/Navbar';
import '../../App.css'

const Home = () => {
  return (
    <>
      <section>
        <div className="homepage">
          {/* container-fluid */}
          <div className='layout'>
            <Navbar />
            <div className="mainpage">
              Home page
            </div>
          </div>
        </div>
      </section>

      {/* <Slider /> */}
    </>
  )
}

export default Home
