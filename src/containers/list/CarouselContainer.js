import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from '@components/carousel';
import useIsMobile from '@hooks/useIsMobile';
import {getCarousel} from '@modules/carousel';
import config from '@config';

const {IMG_URL} = config;

function CarouselContainer(props) {
  const dispatch = useDispatch();
  const {carousel} = useSelector(({carousel}) => ({carousel: carousel.carousel}));
  const [list, setList] = useState([]);
  const isMobile = useIsMobile(1023);

  useEffect(() => {
    dispatch(getCarousel());
  }, [dispatch]);

  useEffect(() => {
    if (!carousel) return;

    const deviceImage = isMobile ? 'mobileImage' : 'image';
    const imgUrl = carousel.map(item => `${IMG_URL}${item[deviceImage]}`);

    setList([...imgUrl]);
  }, [isMobile, carousel]);

  return <Carousel list={list}/>;
}

export default CarouselContainer;