import React from "react";
import Slider from "react-slick";
import './index.scss';
import { Button } from 'react-bootstrap';


export default function MultipleItems({data}){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  
  
  return (
    <>
    <div className="slider">
        <h2 className="titre"> Popular events this month</h2>
        <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <div className="card__container--inner--card"
                key={index}>
                    
    
                    <img src={item.url} alt="hero_img" />
                  
                    <div className="card__container--inner--card--date_time">
                      <img src="https://www.wanderon.in/svg/clock.svg" alt="time" />
                      <p>{item.time}</p>
                    </div>
    
                    <div>
                    <h2>{item.titre}</h2>
                    <div className="card__container--inner--card--description">{item.description}</div>
                    </div>
                    
                    <div className="card__container--inner--card--price">prix: {item.prix}</div>
                  </div>
              );
            })}
        </Slider>
            <Button className='consulter'>Explore more Events</Button>
      
      
    
    
    </div>
    </>
  );
}
    