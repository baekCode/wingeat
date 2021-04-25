import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';
import List from '@components/list';
import Title from '@components/title';
import useIsMobile from '@hooks/useIsMobile';
import {getList, initialList} from '@modules/list';

ListContainer.propTypes = {};

function ListContainer({history}) {
  const dispatch = useDispatch();
  const {list, isInfinityPages, cart} = useSelector(({list, cart}) => ({
    list           : list.list,
    isInfinityPages: list.isInfinityPages,
    cart           : cart.cartList
  }));
  const [pageNumber, setPageNumber] = useState(1);
  const [cartData, setCartData] = useState([]);
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

  useEffect(() => {
    const {location} = history;
    return () => (location.pathname === '/') && dispatch(initialList());
  }, [dispatch, history]);

  useEffect(() => {
    dispatch(getList(pageNumber));
  }, [dispatch, pageNumber]);

  useEffect(() => {
    let storageData = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      if (!storageData) return setCartData([]);
      return setCartData(cart.filter(item => storageData.includes(item.id)));
    }
  }, [cart]);

  useEffect(() => {
    console.log('cart', cart);
  }, [cart]);

  return (
    <>
      <Title children="윙잇 MADE"/>
      {list && <List list={list} isMobile={isMobile} lastElementRef={lastElementRef}/>}
    </>
  );
}

export default withRouter(ListContainer);