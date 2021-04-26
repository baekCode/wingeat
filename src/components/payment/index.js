import React from 'react';
import {Container, TotalPrice} from '@components/payment/styled';

Payment.propTypes = {};

function Payment({totalPrice = 0}) {
  const totalPriceComma = totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return (
    <Container>
      <TotalPrice>{totalPriceComma}</TotalPrice>
      <button>주문하기</button>
    </Container>
  );
}

export default Payment;