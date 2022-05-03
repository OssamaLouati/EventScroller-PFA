import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import {Header, Footer, Slider} from './container';
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
        <Route path='/services' component={Services} />
        <Route path='/contact-us' element={<Contact/>} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>



    <Header />
    <Slider data = {data}/>



    <div className="App">
      <form action='../../post' method='post' >
        <button type="submit">
            Connected?
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
