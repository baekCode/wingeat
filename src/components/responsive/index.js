import React from 'react';
import {Container} from '@components/responsive/styled';

Responsive.propTypes = {};

function Responsive({children, ...rest}) {
  return <Container {...rest}>{children}</Container>;
}

export default Responsive;