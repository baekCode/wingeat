import React from 'react';
import {Container} from '@components/cartList/styled';
import CartItem from '@components/cartList/CartItem';

CartList.propTypes = {};

function CartList({cartList}) {
  if (!cartList) return;
  return (
    <Container>
      {cartList.map((item, index) => <CartItem key={index} item={item}/>)}
    </Container>
  );
}

export default CartList;