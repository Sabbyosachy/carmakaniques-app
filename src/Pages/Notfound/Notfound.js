import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div>
            <img className="py-5 w-100" src="https://www.juraganmainan.com/assets/img/404.jpg" alt="" srcset="" />
            <div className="pb-5">

            <Link to="/">
                <button className="btn_regular">Go Back</button>
            </Link>
            </div>
   
        </div>
    );
};

export default Notfound;