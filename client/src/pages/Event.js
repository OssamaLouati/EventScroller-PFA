import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { dataList } from "../assets/constants";

import { useParams } from "react-router-dom";
import "./event.css";

const Event=() =>{
  
  
  const prodid=useParams();
  const proDetail=dataList.filter(x=>x.id == prodid.id);
  const product=proDetail[0];
  console.log(product);
  
  return (
  <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-white my-5">
                  <h1>{product.title}</h1>
                </div>
              </div>
              {/* end of title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={product.coverSrc} className="img-fluid" alt="" />
                </div>
                {/* prdoduct info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize ">
                <div className="card__container--inner--card--date_time">
                      <img src="https://www.wanderon.in/svg/clock.svg" alt="time" />
                      <p>{product.serviceTime}</p>
    
                      
                    </div>
                  <h1 className="text-title text-uppercase text-blue mt-3 mb-2">details </h1>
                  <p className="text-white">{product.text}</p>
                  <h4 className="text-title text-uppercase text-blue text-blue mt-3 mb-2">
                  Category : <p className="text-uppercase text-white">{product.category} </p>
                  Type: <p className="text-uppercase text-white">{product.cuisine}</p>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price :
                      <p className="text-uppercase text-white">
                      {product.price}<span> MAD</span></p> 
                    </strong>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Description :
                      <p className="text-uppercase text-white">
                      {product.description}</p> 
                    </strong>
                  </h4>
                  
                  {/* buttons */}
                  <div>
                    <NavLink to="/events">
                      <Button className="btnretour">Back</Button>
                    </NavLink>
                    <NavLink to="/joint">
                      <Button className="btnjoint">Join</Button>
                    </NavLink>
                    
                  </div>
                </div>
              </div>
            </div>
          
          );
        };
          
        
        export default Event;