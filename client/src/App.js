import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/Events';
import Login from './pages/login';
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
        <Route path='/about' component={About} />
        <Route path='/login' element={<Login/> } />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </Router>

    



    <div className="App">
      <form action='../../post' method='post' >
        <button type="submit">
            connect React JS to Node Js?
        </button>
      </form>
    </div>
    <div>
    </div>

    <div>
    
    
    
    </div>
   <Footer />
    </div>
    
  );
}

export default App;
