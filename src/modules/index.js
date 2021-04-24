import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import list, {listSaga} from '@modules/list';
import carousel, {carouselSaga} from '@modules/carousel';
import loading from '@modules/loading';
import cart from '@modules/cart';


const rootReducer = combineReducers({
  loading,
  list,
  carousel,
  cart
});

export function* rootSaga() {
  yield all([listSaga(), carouselSaga()]);
}

export default rootReducer;