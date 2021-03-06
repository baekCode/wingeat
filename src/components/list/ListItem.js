import React from 'react';
import config from '@config';
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

function ListItem({item, isMobile, lastElementRef, onClickCartHandler}) {
  const {id, itemName, image} = item;
  const {IMG_URL} = config;

  const price = item?.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  const onClick = () => {
    const itemData = {...item, count: 1};
    onClickCartHandler(itemData);
  };

  return (
    <ItemContainer isMobile={isMobile} ref={lastElementRef} data-id={id}>
      <ItemContents>
        <ItemThumb>
          <img src={`${IMG_URL}${image}`} alt=""/>
          <ItemCart><ItemCartButton onClick={onClick}><FaShoppingCart/></ItemCartButton></ItemCart>
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