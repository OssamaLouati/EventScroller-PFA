import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Event from './pages/event';
import CreateEvent from './pages/createEvent';
import Filter from './pages/Filter';
import LoginB from './pages/loginBad';
import Contact from './pages/contact';
import Signup from './pages/signup';
import {Footer} from './container';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' element={<Login/> } />
          <Route path='/loginBad' element={<LoginB/> } />
          <Route path='/Events' element={<Filter/>} />
          <Route path='/contact-us' element={<Contact/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route exact path="/event/:id" element={<Event/>} />
          <Route path="/createEvent" element={<CreateEvent/>} />
        </Routes>
      </Router>

      <Footer />

    </div>  
  );
}

export default App;
