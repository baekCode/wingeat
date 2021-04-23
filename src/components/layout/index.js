import React from 'react';
import {Container} from '@components/layout/styled';
import Header from '@components/header';

Layout.propTypes = {};

function Layout({children, ...rest}) {
  return <Container {...rest}>
    <Header/>
    {children}
  </Container>;
}

export default Layout;