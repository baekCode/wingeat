import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import List from '@components/list';
import Title from '@components/title';
import useIsMobile from '@hooks/useIsMobile';
import {getList, initialList} from '@modules/list';
import {getCart} from '@modules/cart';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ListContainer.propTypes = {};

function ListContainer({history}) {
  const dispatch = useDispatch();
  const {list, isInfinityPages, cart} = useSelector(({list, cart}) => ({
    list           : list.list,
    isInfinityPages: list.isInfinityPages,
    cart           : cart.cartList
  }));
  const [pageNumber, setPageNumber] = useState(1);
  const isMobile = useIsMobile(1023);
  const observer = useRef();
  const lastElementRef = useCallback(
    node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && isInfinityPages) {
          setPageNumber(prevPageNumber => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isInfinityPages],
  );

  const onClickCartHandler = itemInfo => {
    const itemName = itemInfo.itemName.substr(0, 7);
    toast(`[${itemName}..] 상품이 장바구니에 추가되었습니다.`);
    dispatch(getCart(itemInfo));
  };

  useEffect(() => {
    const {location} = history;
    return () => (location.pathname === '/') && dispatch(initialList());
  }, [dispatch, history]);

  useEffect(() => {
    dispatch(getList(pageNumber));
  }, [dispatch, pageNumber]);


  return (
    <>
      <Title children="윙잇 MADE"/>
      {list &&
      <List list={list} isMobile={isMobile} lastElementRef={lastElementRef} onClickCartHandler={onClickCartHandler}/>}
    </>
  );
}

export default withRouter(ListContainer);