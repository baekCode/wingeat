import styled from 'styled-components';

export const Container = styled.div`
  margin : 0 auto;
  width: 1200px;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;