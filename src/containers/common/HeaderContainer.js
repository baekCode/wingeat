import React, {useEffect, useState} from 'react';
import Header from '@components/Header';
import {useSelector} from 'react-redux';

HeaderContainer.propTypes = {};

function HeaderContainer(props) {
  const [cartCount, setCartCount] = useState(0);
  const {cart} = useSelector(({cart}) => ({cart: cart.cartList}));

  useEffect(() => {
    const count = Object.keys(cart).length;
    setCartCount(count);
  }, [cart]);

  return <Header cartCount={cartCount}/>;
}

export default HeaderContainer;