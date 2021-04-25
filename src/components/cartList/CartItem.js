import React from 'react';
import config from '@config';
import {
  ItemCheckbox,
  ItemContainer,
  ItemContents,
  ItemInfo,
  ItemPrice,
  ItemQuantity,
  ItemThumbnail,
  ItemTitle,
  ItemTotalPrice
} from '@components/cartList/styled';

CartItem.propTypes = {};

function CartItem({item}) {
  const {IMG_URL} = config;
  return (
    <ItemContainer>
      <ItemCheckbox type={'checkbox'}/>
      <ItemContents>
        <ItemThumbnail src={`${IMG_URL}${item.image}`}/>
        <ItemInfo>
          <ItemTitle children={item.itemName}/>
          <ItemPrice children={item.price}/>
          <ItemQuantity>{item.count}</ItemQuantity>
          <ItemTotalPrice>{item.price * item.count}</ItemTotalPrice>
        </ItemInfo>
      </ItemContents>

    </ItemContainer>
  );
}

export default CartItem;