import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { dataList } from "../../assets/constants";
import './index.scss';
import { NavLink } from 'react-router-dom';
import { Form, FormControl,Button } from 'react-bootstrap';


export default function MultipleItems({data}){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };

  const [ev, setEv]=useState(dataList);
  
  return (
    <>
        <h2 className="titre"> Popular Events This Month</h2>
        
        <div className='searching'>
          <Form className="d-flex">
            Search By:   
              <FormControl
                type="search"
                placeholder="name"
                className="me-2"
                aria-label="Search"
                />
              <FormControl
                type="search"
                placeholder="city"
                
                className="me-2"
                aria-label="Search"
                />
              <FormControl
                type="date"
                placeholder="date"
                className="me-2"
                aria-label="Search"
                />
              <Button variant="outline-success" className='search'>Search</Button>

            </Form>
          </div>
    <div className="slider">
        
        <Slider {...settings}>
            {data.map((item, index) => {
              return (
                <NavLink style={{textDecoration: 'none'}} to={`/event/${item.id}`} >
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
                    
                    <div className="card__container--inner--card--price">price: {item.prix}</div>
                  </div>
            </NavLink>
              );
            })}
        </Slider>
        <NavLink to={'/events'}>
            <Button className='consulter'>Explore more Events</Button>
        </NavLink>
      
    
    
    </div>
    </>
  );
}
    