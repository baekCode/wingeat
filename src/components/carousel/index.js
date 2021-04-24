import React from 'react';
import CarouselItem from '@components/carousel/CarouselItem';
import {CarouselSlider} from '@components/carousel/styled';

Carousel.propTypes = {};

function Carousel({list}) {
  if (!list) return null;
  const settings = {
    arrows        : false,
    dots          : true,
    infinite      : true,
    autoplay      : true,
    autoplaySpeed : 3000,
    speed         : 500,
    slidesToShow  : 1,
    slidesToScroll: 1
  };
  return (
    <CarouselSlider {...settings}>
      {list.map((src, index) => <CarouselItem key={index} src={src}/>)}
    </CarouselSlider>
  );
}

export default Carousel;