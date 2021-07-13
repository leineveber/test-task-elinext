import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// reducers
import searchImages from './slices/searchImagesSlice';

// saga
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/rootSaga';

const middleware = getDefaultMiddleware({
  immutableCheck: true,
  serializableCheck: false,
  thunk: false,
});

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

export const store = configureStore({
  reducer: { searchImages },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
