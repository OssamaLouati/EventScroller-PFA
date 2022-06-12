import React from 'react';
import { NavLink } from 'react-router-dom';
import gpt3Logo from '../../logo0.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

      
    <div className="gpt3__footer-btn">
      <p>Get started here and now </p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Finding and sharing activities with EventScroller<br/> #StayHappening <br/><br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Discover Events</h4>
        <p>Events for you</p>
        <p>Virtual events</p>
        <p>Get Event Updates</p>
        <p>EventScroller app</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Host Events</h4>
        <p>Publish Your Events</p>
        <p>Sell Tickets Online</p>
        <p>Promote Your Events</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 EventScroller. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;