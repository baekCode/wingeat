import React from 'react';
import Layout from '@components/layout';
import CarouselContainer from '@containers/list/CarouselContainer';

ListPage.propTypes = {};

function ListPage(props) {
  return (
    <Layout>ListPage
      <CarouselContainer/>
    </Layout>
  );
}

export default ListPage;