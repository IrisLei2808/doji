import {createStore,applyMiddleware} from 'redux';
import rootReducer from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2 // Xem thêm tại mục "Quá trình merge".
 };

 const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)
export default {store}