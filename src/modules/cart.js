import {createAction, handleActions} from 'redux-actions';

const CART = 'cart/CART';

export const getCart = createAction(CART, cartList => cartList);

const initialState = {};

const cart = handleActions({
  [CART]: (state, {payload: cartList}) => {
    const itemKey = cartList?.id;
    let storageData = JSON.parse(localStorage.getItem('cartList'));
    if (!storageData) storageData = {};

    if (itemKey) {
      storageData = {
        ...state,
        [itemKey]: {...cartList}
      };
    } else {
      storageData = {
        ...state,
        ...cartList
      };
    }

    const resultData = {...state, ...storageData};
    localStorage.setItem('cartList', JSON.stringify(resultData));

    return resultData;
  }
}, initialState);

export default cart;