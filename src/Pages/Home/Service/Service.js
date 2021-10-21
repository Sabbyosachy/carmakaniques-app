import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const{id,name,price,img,description}=props.service;
    return (
        
        <div className="service-container shadow p-3 mb-5 bg-body rounded">
            <img src={img} alt="" srcset="" />
           <h3 className="py-2 text-primary">{name}</h3>
           <h5>Price: {price}</h5>
           <p>{description}</p>
          <Link to={`/booking/${id}`}> <button className="btn_regular">Book {name.toLowerCase()}</button> </Link>
        </div>
    );
};

export default Service;