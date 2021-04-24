import React from 'react';
import {Container, Contents} from '@components/layout/styled';
import Header from '@components/header';
import Title from '@components/title';

Layout.propTypes = {};

function Layout({children, title, ...rest}) {
  return (
    <Container>
      <Header/>
      {title && <Title children={title}/>}
      <Contents {...rest} children={children}/>
    </Container>
  );
}

export default Layout;