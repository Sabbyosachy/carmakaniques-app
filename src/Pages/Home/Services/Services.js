import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
            <h1 className="pt-5 pb-2 text-primary">Our Services</h1>
        <div className="service_container">
            
           {
               services.map(service => <Service key={service.id} service={service}>

               </Service>)
           } 
        </div>
        </div>
    );
};

export default Services;