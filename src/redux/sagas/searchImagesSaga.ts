// saga
import { call, put, takeEvery } from 'redux-saga/effects';

// actions
import {
  fetchFailed,
  fetchRequested,
  fetchSucceeded,
} from '../slices/searchImagesSlice';

// api
import http from '../../api/http';

// interfaces
import { PayloadAction } from '@reduxjs/toolkit';
import IApiOptions from '../../interfaces/IApiOptions';
import { IResponseFromSaga } from '../../interfaces/IResponse';

function* searchImages(action: PayloadAction<IApiOptions>) {
  try {
    const response: IResponseFromSaga = yield call(http, action.payload);

    yield put(fetchSucceeded(response.data));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}

function* searchImagesSaga() {
  yield takeEvery(fetchRequested, searchImages);
}

export default searchImagesSaga;
