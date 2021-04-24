import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CarouselSlider = styled(Slider)`

  .slick-dots {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: auto;
    li {
      margin : 0
    }
  }
`;

export const Item = styled.div``;


export const ItemImage = styled.img``;