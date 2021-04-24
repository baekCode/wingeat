import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  padding-right: 1.5rem;
  @media (max-width: 768px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const ItemContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  border-bottom : 1px solid #eee;
`;

export const ItemCheckbox = styled.input`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
export const ItemContents = styled.div`
  display: flex;
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ItemThumbnail = styled.img`
  max-width: 100px;
`;
export const ItemTitle = styled.div``;
export const ItemPrice = styled.div``;
export const ItemQuantity = styled.div``;
export const ItemTotalPrice = styled.div``;
