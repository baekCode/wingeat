import React from 'react';
import {Container, Contents} from '@components/layout/styled';
import Header from '@components/header';

Layout.propTypes = {};

function Layout({children, ...rest}) {
  return (
    <Container>
      <Header/>
      <Contents {...rest} children={children}/>
    </Container>
  );
}

export default Layout;