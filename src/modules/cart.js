import {createAction, handleActions} from 'redux-actions';

const CART = 'cart/CART';

export const getCart = createAction(CART, cartList => cartList);

const initialState = {
  cartList: {},
  error   : null
};

const cart = handleActions({
    [CART]: (state, {payload: cartList}) => {
      // const resDataKey = Object.keys(cartList.data.resData)[0];
      const itemKey = cartList?.id;
      return {
        ...state,
        cartList: {
          ...state.cartList,
          [itemKey]: {...cartList}
        }
      };
    }
  },
  initialState
);

export default cart;