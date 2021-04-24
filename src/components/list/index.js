import React from 'react';
import {Container} from '@components/list/styled';
import ListItem from '@components/list/ListItem';

List.propTypes = {};

function List({list, isMobile}) {
  if (!list) return;
  return (
    <Container>
      {list.map(item => <ListItem isMobile={isMobile} key={item.id} item={item}/>)}
    </Container>
  );
}

export default List;