import React from 'react';
import {TitleStyled} from '@components/title/styled';

Title.propTypes = {};

function Title({children}) {
  return <TitleStyled children={children}/>;
}

export default Title;