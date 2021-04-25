import React from 'react';
import {Container} from '@components/toast/styled';

function Toast(props) {
  return <Container
    position="bottom-center"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover={false}/>;
}

export default Toast;