import React from 'react';

const Expert = (props) => {
    const{name,expert,img,description}=props.expert;
    return (
        <div>
            <div class="col">
           <div class="card service-container shadow p-3 mb-5 bg-body rounded">
           <img src={img} class="card-img-top" alt="..."/>
         <div class="card-body">
        <h3 class="card-title text-primary">{name}</h3>
        <p class="card-text">{description}</p>
        <h6>Exper In : {expert}</h6>
        <button className="btn_regular">See More</button>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Expert;