import React, {useCallback, useEffect, useRef, useState} from 'react';
import List from '@components/list';
import Title from '@components/title';
import useIsMobile from '@hooks/useIsMobile';
import {useDispatch, useSelector} from 'react-redux';
import {getList} from '@modules/list';

ListContainer.propTypes = {};

function ListContainer(props) {
  const dispatch = useDispatch();
  const {list, isInfinityPages} = useSelector(({list}) => ({
    list           : list.list,
    isInfinityPages: list.isInfinityPages
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

  useEffect(() => {
    dispatch(getList(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Title children="윙잇 MADE"/>
      {list && <List list={list} isMobile={isMobile} lastElementRef={lastElementRef}/>}
    </>
  );
}

export default ListContainer;