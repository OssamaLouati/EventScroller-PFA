import React, {useState,useEffect} from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { dataList } from "../assets/constants";
import { useParams } from "react-router-dom";
import Paypal from "../components/paypal/paypal";
import "./event.scss";


const Event=() =>{
  const prodid=useParams();
  const proDetail=dataList.filter(x=>x.id == prodid.id);
  const product=proDetail[0];
  const [checkout, setCheckOut] = useState(false);  
  useEffect(() => {
    document.body.style.zoom = "100%";
  }, []);

return (
    <>
      <div className="bobo">
          {/* title */}

          <div className="title">
              <h1>{product.title}</h1>
          </div>
          
          <div className="img88">
            <h3>Created by :  </h3>
            <div className="imguser">
              <img  src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg" alt="time" /> 
              <div className="imguser--ti">
                Louati Oussama
              </div>
          </div>

          <br/>
          <img src={product.coverSrc} className="img-fluid" alt="" />
        
          {/* prdoduct info */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize ">
          <div className="card__container--inner--card--date_time">
              <img src="https://www.wanderon.in/svg/clock.svg" alt="time" />
              <p>{product.serviceTime}, {product.localisation}</p>
          </div>

          <br/>
          <h1 className="text-title text-uppercase text-blue mt-3 mb-2">Details for this event. </h1>
          <br/>
            
          <h3 className="text-title text-uppercase text-blue text-blue mt-3 mb-2">
          Category : </h3>
          
          <p className="text-uppercase text-white">{product.category} </p>
          
          <br/>
          <h3>Type:</h3> 
          <p className="text-uppercase text-white">{product.cuisine}</p>
          
          <br/>
          <h3 className="text-blue">
              price :
          </h3>
          <p className="text-uppercase text-white">{product.price}<span> MAD</span></p> 
            
          
          <br/>
          <h4 className="text-blue">                
            Description :
          </h4>
          
          <br/>
          <p className="text-uppercase text-white">{product.description}</p> 
          <br/>  
          
          <br/>  
                
          {/* buttons */}

        </div>
          <div>
            <NavLink to="/events">
              <Button className="button">All Events</Button>
            </NavLink>
            
            {checkout ? (
              <Paypal />
              ) : (
                <button className='button'
                    onClick={() => {setCheckOut(true);}
            }>  buy online </button>

      )}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
          </div>
      </div>
    </div>  
    <br/>
    <br/>
    <br/>
    <br/>
  </>
  );
};
        
  export default Event;