import {createAction, handleActions} from 'redux-actions';

const CART = 'cart/CART';
const CART_DELETE = 'cart/CART_DELETE';

export const getCart = createAction(CART, cartList => cartList);
export const deleteCart = createAction(CART_DELETE, cartList => cartList);

const initialState = {};

const cart = handleActions({
  [CART]       : (state, {payload: cartList}) => {
    const itemKey = cartList?.id;
    let storageData = JSON.parse(localStorage.getItem('cartList'));
    if (!storageData) storageData = {};

    if (itemKey) {
      storageData = {
        ...state,
        [itemKey]: {
          ...cartList,
          count: (state[itemKey]?.count ? state[itemKey]?.count : 0) + cartList.count
        }
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
  },
  [CART_DELETE]: (state, {payload: cartList}) => {
    const resultData = {...cartList};
    localStorage.setItem('cartList', JSON.stringify(resultData));
    return resultData;
  }
}, initialState);

export default cart;