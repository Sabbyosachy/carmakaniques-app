import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const{serviceId}=useParams();
    return (
        <div className="py-5">
            <h3 className="pt-5">Booking Element :{serviceId} </h3>
        </div>
    );
};

export default Booking;