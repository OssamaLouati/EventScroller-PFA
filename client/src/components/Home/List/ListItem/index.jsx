import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, serviceTime, rating },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>{serviceTime}</b> 
      </p>
      <p>
        <b>{price} MAD</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
