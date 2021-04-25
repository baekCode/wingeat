import React from 'react';
import Payment from '@components/payment';
import {useSelector} from 'react-redux';

OrderContainer.propTypes = {};

function OrderContainer(props) {
  /*
  * 리덕스 장바구니에서 선택된 값을 바라본다. 합계금액을 바라보면될듯 */
  const {payment} = useSelector(({payment}) => ({payment: payment.total}));
  return <Payment totalPrice={payment}/>;
}

export default OrderContainer;