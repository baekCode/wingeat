import React from 'react';
import CartList from '@components/cartList';

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
  /*
  * 리덕스 장바구니에서 장바구니 리스트를 출력한다. (리덕스는 저장된 스토리지를 먼저 체크할것)*/
  return (
    <>
      <CartList cartList={MOCK_DATA}/>
    </>
  );
}

export default CartContainer;