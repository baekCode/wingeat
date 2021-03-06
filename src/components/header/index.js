import React from 'react';
import {Cart, Container, Contents, Count, Inner, Logo, TopBar} from '@components/header/styled';

Header.propTypes = {};

function Header({cartCount = 0}) {
  return (
    <Container>
      <TopBar><Inner><Cart to={'/cart'}><Count>{cartCount}</Count>장바구니</Cart></Inner></TopBar>
      <Contents><Logo to={'/'}><img src={'https://image.wingeat.com/logo/images/we_logo_center.png'}/></Logo></Contents>
    </Container>
  );
}

export default Header;