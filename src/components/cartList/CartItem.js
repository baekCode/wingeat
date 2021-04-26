import React, {useState} from 'react';
import config from '@config';
import {
  DeleteButton,
  DeleteButtonIcon,
  ItemCheckbox,
  ItemContainer,
  ItemContents,
  ItemInfo,
  ItemPrice,
  ItemQuantity,
  ItemThumbnail,
  ItemTitle,
  ItemTotalPrice,
  QuantityButton
} from '@components/cartList/styled';
import {toast} from 'react-toastify';

CartItem.propTypes = {};

function CartItem({item, onClickCheckbox, onClickDelete, onClickIncrease, onClickDecrease}) {
  const {id, image, itemName, price, count} = item;
  const {IMG_URL} = config;
  const [quantity, setQuantity] = useState(count);
  const [checked, setChecked] = useState(false);
  const totalPrice = price * quantity;
  const priceComma = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  const totalPriceComma = totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  const increase = () => {
    setQuantity(quantity + 1);
    if (checked) {
      onClickIncrease({id, itemName, quantity, price, totalPrice, checked});
    }
  };
  const decrease = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
    if (checked) {
      onClickDecrease({id, itemName, quantity, price, totalPrice, checked});
    }
  };
  const onClick = e => {
    setChecked(e.target.checked);
    onClickCheckbox({id, itemName, quantity, price, totalPrice, checked: e.target.checked});
  };
  const onClickDel = () => {
    if (checked) return toast.error('체크 해제 후 삭제 ');
    onClickDelete(item);
  };

  return (
    <ItemContainer>
      <ItemCheckbox onClick={onClick} type={'checkbox'}/>
      <ItemContents>
        <ItemThumbnail src={`${IMG_URL}${image}`}/>
        <ItemInfo>
          <ItemTitle children={itemName}/>
          <ItemPrice><span>가격 : </span>{priceComma}</ItemPrice>
          <ItemQuantity><span>수량 : </span>
            <QuantityButton type={'decrease'} onClick={decrease}>-</QuantityButton>
            {quantity}
            <QuantityButton type={'increase'} onClick={increase}>+</QuantityButton>
          </ItemQuantity>
          <ItemTotalPrice><span>합계 : </span>{totalPriceComma}</ItemTotalPrice>
        </ItemInfo>
        <DeleteButton onClick={onClickDel}><DeleteButtonIcon/></DeleteButton>
      </ItemContents>
    </ItemContainer>
  );
}

export default CartItem;