import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
        <div className="py-5 mt-2">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/Jv2Scrq/banner2.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Some Repairs Have Workarounds or are Optional</h3>
      <p>A reliable car mechanic is guaranteed a steady flow of income, which leads to most people honing their mechanic skills and repair cars perfectly without having the required qualifications.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/2YTcKqs/banner3.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>The Cars that are Reliable</h3>
      <p>There are myriads of car repairs necessary, especially the ones that are related to your safety. However, it is good to ask yourself whether you are really in need of that optional, fancy feature. Always try and find out whether there could be cheaper and easier ways to fix your car`s problem.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/R7Skmj5/banner1.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>They Might not Be Certified</h3>
      <p>Your car mechanic is likely to prefer that you drove unreliable vehicles for him/her to keep repairing it on your behalf. The reliable type of cars is hardly seen by mechanics except during routine maintenance servicing sessions.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        </div>
    );
};

export default Banner;