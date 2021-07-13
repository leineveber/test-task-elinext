import { all, fork } from 'redux-saga/effects';
import searchImagesSaga from './searchImagesSaga';

export default function* rootSaga() {
  yield all([fork(searchImagesSaga)]);
}
