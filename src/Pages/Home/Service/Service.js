import React from 'react';
import './Service.css';

const Service = (props) => {
    const{name,price,img,description}=props.service;
    return (
        
        <div className="service-container shadow p-3 mb-5 bg-body rounded">
            <img src={img} alt="" srcset="" />
           <h3 className="py-2 text-primary">{name}</h3>
           <h5>Price: {price}</h5>
           <p>{description}</p>
           <button className="btn_regular">Book Now</button> 
        </div>
    );
};

export default Service;