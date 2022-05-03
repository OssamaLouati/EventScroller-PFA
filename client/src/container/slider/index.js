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
                    <div className="card__container--inner--card--description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with d</div>
                    </div>
                    
                    <div className="card__container--inner--card--price">prix: {item.prix}</div>
                  </div>
              );
            })}
        </Slider>
        <Button className='consulter'>Explore more </Button>
    </div>
    </>
  );
}
    