import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const[experts,setExperts]=useState([]);
    useEffect(()=>{
        fetch('./expert.json')
        .then(res=>res.json())
        .then(data=>setExperts(data));
    },[])
    return (
        <div id="experts" className="container pb-5">
            <h1 className="text-primary py-2 pb-5 mt-5">Our Experts</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-1  row-cols-lg-3   g-4">
            {
                experts.map(expert=><Expert key={expert.id} expert={expert}>

                </Expert>)
            }
        </div>
        </div>
    );
};

export default Experts;