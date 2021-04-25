import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  
  button { 
    display: block;
    width: 100%;
    padding: 0.8rem 0.5rem;
    color: #fff;
    border: 0;
    border-radius: 5px;
    background: #ff3f42
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TotalPrice = styled.div`
  margin-top: 2rem;
  min-height: 50px;
  max-height: 150px;
`;