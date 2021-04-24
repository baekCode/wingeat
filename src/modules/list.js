import {createAction, handleActions} from 'redux-actions';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {createRequestActionTypes} from '@lib/createRequestSaga';
import * as listAPI from '@lib/api';

const [LIST, LIST_SUCCESS, LIST_FAILURE] = createRequestActionTypes('list/LIST');

export const getList = createAction(LIST);

const getListSaga = createRequestSaga(LIST, listAPI.getList);

export function* listSaga() {
  yield takeLatest(LIST, getListSaga);
}

const initialState = {
  list : [],
  error: null
};

const list = handleActions({
  [LIST]        : state => ({
    ...state,
    list : [...state.list],
    error: null,
  }),
  [LIST_SUCCESS]: (state, {payload: list}) => ({
    ...state,
    list: [...state.list, ...list]
  }),
  [LIST_FAILURE]: (state, {payload: error}) => ({
    ...state,
    error
  })
}, initialState);

export default list;