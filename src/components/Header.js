import React from 'react';
import {Link} from 'react-router-dom';

Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <h1><Link to={'/'}>로고</Link></h1>
      <Link to={'/cart'}>장바구니</Link>
    </div>
  );
}

export default Header;