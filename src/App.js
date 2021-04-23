import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ListPage from '@pages/ListPage';
import CartPage from '@pages/CartPage';

function App() {
  return (
    <Switch>
      <Route component={ListPage} path={'/'} exact/>
      <Route component={CartPage} path='/cart'/>
      <Redirect from={'*'} to={'/'}/>
    </Switch>
  );
}

export default App;