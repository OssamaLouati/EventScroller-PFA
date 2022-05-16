import React from 'react';
import {Header, Slider, Create} from '../container';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data from '../assets/data';

const Home = () => {
  return(
    <div>
    <Header/>
    <Slider data = {data} />
    <Create/>
    </div>
  )
}
export default Home;