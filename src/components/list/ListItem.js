import React, {useState} from 'react';
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
  const [count, setCount] = useState(1);
  const price = item?.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
  const onClick = () => {
    const itemData = {...item, count};
    onClickCartHandler(itemData);
    setCount(count + 1);
  };

  return (
    <ItemContainer isMobile={isMobile} ref={lastElementRef}>
      <ItemContents>
        <ItemThumb>
          <img src={`https://image.wingeat.com/${image}`} alt=""/>
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