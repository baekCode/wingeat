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
  const {image, itemName, price, count} = item;
  const {IMG_URL} = config;
  const totalPrice = price * count;
  const priceComma = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  const totalPriceComma = totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return (
    <ItemContainer>
      <ItemCheckbox type={'checkbox'}/>
      <ItemContents>
        <ItemThumbnail src={`${IMG_URL}${image}`}/>
        <ItemInfo>
          <ItemTitle children={itemName}/>
          <ItemPrice children={priceComma}/>
          <ItemQuantity>{count}</ItemQuantity>
          <ItemTotalPrice>{totalPriceComma}</ItemTotalPrice>
        </ItemInfo>
      </ItemContents>

    </ItemContainer>
  );
}

export default CartItem;