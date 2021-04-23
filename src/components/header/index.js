import React from 'react';
import {Cart, Container, Inner, Logo, TopBar} from '@components/header/styled';

Header.propTypes = {};

function Header(props) {
  return (
    <Container>
      <TopBar><Inner><Cart to={'/cart'}>장바구니</Cart></Inner></TopBar>
      <Logo to={'/'}>로고</Logo>
    </Container>
  );
}

export default Header;