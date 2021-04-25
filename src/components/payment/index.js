import React from 'react';
import {Container, TotalPrice} from '@components/payment/styled';

Payment.propTypes = {};

function Payment({totalPrice = 0}) {
  return (
    <Container>
      <TotalPrice>{totalPrice}</TotalPrice>
      <button>주문하기</button>
    </Container>
  );
}

export default Payment;