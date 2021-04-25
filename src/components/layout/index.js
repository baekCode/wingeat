import React from 'react';
import {Container, Contents} from '@components/layout/styled';
import Title from '@components/title';
import HeaderContainer from '@containers/common/HeaderContainer';
import Toast from '@components/toast';

Layout.propTypes = {};

function Layout({children, title, ...rest}) {
  return (
    <Container>
      <HeaderContainer/>
      {title && <Title children={title}/>}
      <Contents {...rest} children={children}/>
      <Toast/>
    </Container>
  );
}

export default Layout;