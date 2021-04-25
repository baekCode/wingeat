import {createAction, handleActions} from 'redux-actions';

const PAYMENT = 'payment/PAYMENT';

export const getPayment = createAction(PAYMENT, payment => payment);

const initialState = {
  orderInfo: [],
  total    : 0
};

const payment = handleActions({
  [PAYMENT]: (state, {payload: payment}) => {
    if (payment.isMinus) {
      if (payment.quantity === 1) return {
        ...state
      };
      return {
        ...state,
        total: state.total - payment.price
      };
    }
    if (payment.isPlus) {
      return {
        ...state,
        total: state.total + payment.price
      };
    } else {
      return {
        ...state,
        total: payment.checked ? (state.total + payment.totalPrice) : (state.total - payment.totalPrice)
      };
    }
  }
}, initialState);

export default payment;