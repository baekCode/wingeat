import React from 'react';
import Layout from '@components/layout';
import CartContainer from '@containers/cart/CartContainer';
import OrderContainer from '@containers/cart/OrderContainer';

CartPage.propTypes = {};

function CartPage(props) {
  return (
    <Layout display={'flex'}>
      <CartContainer/>
      <OrderContainer/>
    </Layout>
  );
}

export default CartPage;