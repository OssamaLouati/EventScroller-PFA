import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';





function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
    </Router>
    <div className="App">
      <form action='../../post' method='post' className="form">
        <button type="submit">
            Connected?
        </button>
      </form>
    </div>
    </>
  );
}

export default App;
