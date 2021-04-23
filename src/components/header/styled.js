import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Responsive from '@components/responsive';

export const Container = styled.header`
  border-bottom: 1px solid #d9d9d9;
`;

export const Contents = styled(Responsive)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`;

export const Inner = styled(Responsive)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 1.0rem;
`;

export const TopBar = styled.div`
  background: #f5f5f5;
`;

export const Logo = styled(Link)`
  img {
    max-width: 135px;
    height: auto;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  color: #666;
`;

export const Count = styled.span`
  min-width: 0.9rem;
  min-height: 0.9rem;
  margin-right:0.1rem;
  font-size: 0.6rem;
  color: #fff;
  line-height: 0.9rem;
  text-align: center;
  border-radius: 10px;
  background:#ff3f42
`;