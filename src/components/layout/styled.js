import styled from 'styled-components';
import Responsive from '@components/responsive';

export const Container = styled.div`
  width: 100%;
`;

export const Contents = styled(Responsive)`
  display: ${props => props.display};
  @media (max-width: 768px) {
    flex-direction: ${props => props.display === 'flex' ? 'column' : 'row'}
  }
`;