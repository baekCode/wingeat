import React from 'react';
import {Container, Contents} from '@components/layout/styled';
import Header from '@components/header';

Layout.propTypes = {};

function Layout({children}) {
  return (
    <Container>
      <Header/>
      <Contents children={children}/>
    </Container>
  );
}

export default Layout;