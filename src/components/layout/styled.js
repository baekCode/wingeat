import styled from 'styled-components';
import Responsive from '@components/responsive';

export const Container = styled.div`
  width: 100%;
`;

export const Contents = styled(Responsive)`
  display: ${props => props.display};
`;