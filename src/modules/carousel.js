import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '@lib/createRequestSaga';
import * as carouselAPI from '@lib/api';

const [CAROUSEL, CAROUSEL_SUCCESS, CAROUSEL_FAILURE] = createRequestActionTypes('carousel/CAROUSEL');

export const getCarousel = createAction(CAROUSEL);

const getCarouselSaga = createRequestSaga(CAROUSEL, carouselAPI.getCarousel);

export function* carouselSaga() {
  yield takeLatest(CAROUSEL, getCarouselSaga);
}

const initialState = {
  carousel: null,
  error   : null
};

const carousel = handleActions({
  [CAROUSEL]        : state => ({
    ...state,
    carousel: null,
    error   : null,
  }),
  [CAROUSEL_SUCCESS]: (state, {payload: carousel}) => ({
    ...state,
    carousel
  }),
  [CAROUSEL_FAILURE]: (state, {payload: error}) => ({
    ...state,
    error
  })
}, initialState);

export default carousel;