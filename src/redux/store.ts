import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducers
import searchImages from './slices/searchImagesSlice';
import bookmarksReducer from './slices/bookmarksSlice';

// saga
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
};

const bookmarks = persistReducer(persistConfig, bookmarksReducer);

const middleware = getDefaultMiddleware({
  immutableCheck: true,
  serializableCheck: false,
  thunk: false,
});

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

export const store = configureStore({
  reducer: { searchImages, bookmarks },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
