import React from 'react';
import CartList from '@components/cartList';
import {useDispatch, useSelector} from 'react-redux';
import {getPayment, getPaymentDecrease, getPaymentIncrease} from '@modules/payment';
import {deleteCart} from '@modules/cart';

/*
* Redux Cart Mock Data
* checked : 체크박스 선택 및 선택된 부분만 결제 확인
* */
const MOCK_DATA = [
  {
    'itemName': '콩고물 앙금 인절미 (20개입)',
    'price'   : 12900,
    'image'   : 'item/images/ba49b331-ec8a-4db6-ac93-aa4bf86d3deb-w600.jpg',
    'id'      : '2',
    'checked' : true
  },
  {
    'itemName': '콩고물 앙금 인절미 (20개입)',
    'price'   : 12900,
    'image'   : 'item/images/ba49b331-ec8a-4db6-ac93-aa4bf86d3deb-w600.jpg',
    'id'      : '4',
    'checked' : false
  }
];


CartContainer.propTypes = {};

function CartContainer(props) {
  const dispatch = useDispatch();
  const {cart} = useSelector(({cart}) => ({cart: cart}));
  const cartList = Object.values(cart);

  const onClickCheckbox = itemInfo => {
    dispatch(getPayment(itemInfo));
  };

  const onClickIncrease = itemInfo => dispatch(getPaymentIncrease(itemInfo));
  const onClickDecrease = itemInfo => dispatch(getPaymentDecrease(itemInfo));

  const onClickDelete = itemInfo => {

    let _data = cartList.filter(item => item.id !== itemInfo.id);
    if (!_data.length) _data = null;

    dispatch(deleteCart(_data));
  };

  return (
    <>
      <CartList cartList={cartList}
                onClickCheckbox={onClickCheckbox}
                onClickDelete={onClickDelete}
                onClickIncrease={onClickIncrease}
                onClickDecrease={onClickDecrease}/>
    </>
  );
}

export default CartContainer;