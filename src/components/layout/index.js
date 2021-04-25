import React from 'react';
import {Container, Contents} from '@components/layout/styled';
import Title from '@components/title';
import HeaderContainer from '@containers/common/HeaderContainer';

Layout.propTypes = {};

function Layout({children, title, ...rest}) {
  return (
    <Container>
      <HeaderContainer/>
      {title && <Title children={title}/>}
      <Contents {...rest} children={children}/>
    </Container>
  );
}

export default Layout;