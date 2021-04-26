import React from 'react';
import Payment from '@components/payment';
import {useSelector} from 'react-redux';

OrderContainer.propTypes = {};

function OrderContainer(props) {
  const {payment} = useSelector(({payment}) => ({payment: payment.total}));
  return <Payment totalPrice={payment}/>;
}

export default OrderContainer;