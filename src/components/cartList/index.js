import React from 'react';
import {Container} from '@components/cartList/styled';
import CartItem from '@components/cartList/CartItem';

CartList.propTypes = {};

function CartList({cartList, onClickCheckbox, onClickDelete}) {
  return (
    <Container>
      {cartList.length === 0 ?
        <p>장바구니가 비어있습니다.</p> :
        cartList.map((item, index) => <CartItem key={index} item={item} onClickCheckbox={onClickCheckbox}
                                                onClickDelete={onClickDelete}/>)}
    </Container>
  );
}

export default CartList;