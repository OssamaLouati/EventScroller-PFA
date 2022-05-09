import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/Events';
import Login from './pages/login';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Aboute from './components/About/Aboute';
import {Header, Footer, Slider, Create} from './container';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from './data.js';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/login' element={<Login/> } />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>

    <Header />
    

    <Slider data = {data}/>
    <br/>

    <Create />

    <br/>
  <Aboute />
    <br/>
    <br/>
    <br/>


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
    
    <br/>
    <br/>
    <br/>
    <br/>
    
    </div>
   <Footer />
    </>
  );
}

export default App;
