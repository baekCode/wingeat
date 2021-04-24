import React from 'react';
import {Item, ItemImage} from '@components/carousel/styled';

CarouselItem.propTypes = {};

function CarouselItem({src}) {
  return (
    <Item>
      <ItemImage src={src}/>
    </Item>
  );
}

export default CarouselItem;