import {createStore, applyMiddleware} from 'redux';

import rootReducer from './rootReducer';
import {rootMiddleware, sagaMiddleware} from './rootMiddleware';

import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  version: 1.22,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...rootMiddleware),
);

export const persistor = persistStore(store);
