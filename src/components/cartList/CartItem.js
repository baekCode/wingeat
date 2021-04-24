import React from 'react';
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
  return (
    <ItemContainer>
      <ItemCheckbox type={'checkbox'}/>
      <ItemContents>
        <ItemThumbnail src={`https://image.wingeat.com/${item.image}`}/>
        <ItemInfo>
          <ItemTitle children={item.itemName}/>
          <ItemPrice children={item.price}/>
          <ItemQuantity>수량</ItemQuantity>
          <ItemTotalPrice>합계금액</ItemTotalPrice>
        </ItemInfo>
      </ItemContents>

    </ItemContainer>
  );
}

export default CartItem;