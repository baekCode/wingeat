import {createAction, handleActions} from 'redux-actions';

const PAYMENT = 'payment/PAYMENT';
const PAYMENT_INCREASE = 'payment/PAYMENT_INCREASE';
const PAYMENT_DECREASE = 'payment/PAYMENT_DECREASE';

export const getPayment = createAction(PAYMENT, payment => payment);
export const getPaymentIncrease = createAction(PAYMENT_INCREASE, payment => payment);
export const getPaymentDecrease = createAction(PAYMENT_DECREASE, payment => payment);

const initialState = {
  orderInfo: [],
  total    : 0
};

const payment = handleActions({
  [PAYMENT]         : (state, {payload: payment}) => {
    return {
      ...state,
      total: payment.checked ? (state.total + payment.totalPrice) : (state.total - payment.totalPrice)
    };
  },
  [PAYMENT_DECREASE]: (state, {payload: payment}) => {
    console.log(payment);
    if (payment.quantity === 1) return {...state};
    return {
      ...state,
      total: state.total - payment.price
    };
  },
  [PAYMENT_INCREASE]: (state, {payload: payment}) => {
    return {
      ...state,
      total: state.total + payment.price
    };
  }
}, initialState);

export default payment;