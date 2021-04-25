import React, {useState} from 'react';
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
  const [quantity, setQuantity] = useState(count);
  const totalPrice = price * quantity;
  const priceComma = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  const totalPriceComma = totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => setQuantity(quantity === 1 ? 1 : quantity - 1);
  return (
    <ItemContainer>
      <ItemCheckbox type={'checkbox'}/>
      <ItemContents>
        <ItemThumbnail src={`${IMG_URL}${image}`}/>
        <ItemInfo>
          <ItemTitle children={itemName}/>
          <ItemPrice><span>가격 : </span>{priceComma}</ItemPrice>
          <ItemQuantity><span>수량 : </span>
            <button onClick={decrease}>-</button>
            {quantity}
            <button onClick={increase}>+</button>
          </ItemQuantity>
          <ItemTotalPrice><span>합계 : </span>{totalPriceComma}</ItemTotalPrice>
        </ItemInfo>
      </ItemContents>
    </ItemContainer>
  );
}

export default CartItem;