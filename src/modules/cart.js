import {createAction, handleActions} from 'redux-actions';

const CART = 'cart/CART';

export const getCart = createAction(CART, cartList => cartList);

const initialState = {
  cartList: null,
  error   : null
};

const cart = handleActions({
    [CART]: (state, {payload: cartList}) => ({
      ...state,
      cartList
    })
  },
  initialState
);

export default cart;