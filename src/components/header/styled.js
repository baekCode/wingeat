import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Responsive from '@components/responsive';

export const Container = styled.header``;

export const Inner = styled(Responsive)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1.0rem;
`;

export const TopBar = styled.div`
  background: #f5f5f5;
`;

export const Logo = styled(Link)``;

export const Cart = styled(Link)`
  font-size: 0.9rem;
`;
