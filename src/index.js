import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer, {rootSaga} from '@modules/index';
import App from '@/App';
import GlobalStyle from '@lib/GlobalStyles';
import {getCart} from '@modules/cart';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

const loadStorage = storageKey => {
  try {
    const storageDate = localStorage.getItem(storageKey);
    if (!storageDate) return;

    store.dispatch(getCart(JSON.parse(storageDate)));
  } catch (e) {
    console.log('LocalStorage Error');
  }
};

sagaMiddleware.run(rootSaga);
loadStorage('cartList');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle/>
      <App/>
    </BrowserRouter>
  </Provider>, document.getElementById('root')
);
