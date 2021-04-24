import styled from 'styled-components';

export const Container = styled.div`
  margin: -1rem 0 0 -1rem;
  font-size: 0;
   @media (max-width: 768px) {
    width: calc(100% - 1rem);
    margin: -1rem 0 -1rem;
  }
`;

export const ItemContainer = styled.div`
  display: inline-block;
  width: ${props => props.isMobile ? '50%' : '25%'};
  padding: 1rem 0 0 1rem;
  vertical-align: top;
  img {
    max-width: 100%;
  }
`;

export const ItemCartButton = styled.button`
  padding: 1.5rem;
  border: 0;
  cursor: pointer;
  border-radius: 200px;
  background: #ff3f42;
  svg {
    width: 30px;
    height: 30px;
    color: #fff;
  }
`;

export const ItemCart = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  opacity: 0;
  transition: all 0.2s;
`;

export const ItemContents = styled.div`
  &:hover img {
    transform: scale(1.1);
  }
  &:hover ${ItemCart} {
    opacity: 1;
  }
`;

export const ItemThumb = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  img {
    max-width: 100%;
    transition: all 0.3s;
  }
`;

export const ItemInfo = styled.div`
  padding: 0.5rem 0.25rem;
`;

export const ItemTitle = styled.p`
  min-height: 50px;
  max-height: 50px;
  font-size: 1.2rem;
  color:#333;
`;

export const ItemPrice = styled.p`
  font-weight: bold;
  font-size: 1.3rem;
  ::after {
    content:'원';
    font-size: 1.2rem;
  }
`;