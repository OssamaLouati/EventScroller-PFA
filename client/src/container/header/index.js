import React from 'react';
import { NavLink } from 'react-router-dom';
import photo from '../../assets/images/logoh.svg';

import  './index.scss';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text"> Discover outdoor activities with EventScroller</h1>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <p>     <h3>- Grow your events with confidences .</h3></p>
      
      <p>EventScroller gives you everything you need to take your events to the next level by discovering, sharing and creating your events.</p>
      
      <br/>

      <div className="gpt3__header-content__input">
      <NavLink style={{textDecoration: 'none'}} to={'/events'}>  
        <button className="gpt3__header-content__input" type="button">Get started for free</button>
      </NavLink>
      </div>

      
    </div>

    <div className="gpt3__header-image">
      <img src={photo} alt='logo' />
    </div>
  </div>
);

export default Header;