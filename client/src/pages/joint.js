import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { dataList } from '../assets/constants';

const  Joint=() => {
    const itemid=useParams();
    const itemDetails=dataList.filter(x=>x.id == itemid.id);
    const item = itemDetails[0];
    


  return (
    <div>{item.id}</div>
  );
};

export default Joint;
