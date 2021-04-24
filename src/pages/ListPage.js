import React from 'react';
import Layout from '@components/layout';
import CarouselContainer from '@containers/list/CarouselContainer';
import ListContainer from '@containers/list/ListContainer';

ListPage.propTypes = {};

function ListPage(props) {
  return (
    <Layout>
      <CarouselContainer/>
      <ListContainer/>
    </Layout>
  );
}

export default ListPage;