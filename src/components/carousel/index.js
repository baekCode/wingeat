import React from 'react';
import Slider from 'react-slick';

Carousel.propTypes = {};

function Carousel(props) {
  const settings = {
    dots          : true,
    infinite      : true,
    autoplay      : true,
    autoplaySpeed : 3000,
    speed         : 500,
    slidesToShow  : 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default Carousel;