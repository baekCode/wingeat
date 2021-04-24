import React from 'react';
import {
  ItemCart,
  ItemCartButton,
  ItemContainer,
  ItemContents,
  ItemInfo,
  ItemPrice,
  ItemThumb,
  ItemTitle
} from '@components/list/styled';
import {FaShoppingCart} from 'react-icons/all';

ListItem.propTypes = {};

function ListItem({item}) {
  const {id, itemName, image} = item;
  const price = item?.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  return (
    <ItemContainer>
      <ItemContents>
        <ItemThumb>
          <img src={`https://image.wingeat.com/${image}`} alt=""/>
          <ItemCart><ItemCartButton><FaShoppingCart/></ItemCartButton></ItemCart>
        </ItemThumb>
        <ItemInfo>
          <ItemTitle children={itemName}/>
          <ItemPrice children={price}/>
        </ItemInfo>
      </ItemContents>
    </ItemContainer>
  );
}

export default ListItem;