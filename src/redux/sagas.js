import {put , takeLatest, all} from 'redux-saga/effects';
import {DATA_RECIEVE_FROM_API, GET_DATA_FROM_API} from '../redux/item/action/action-type/action-type';

function* fetchProduct() {
    const res = yield fetch('https://5f07309b9c5c250016306abe.mockapi.io/productData2').then(response => response.json(), )
    console.log('json', res) 
    yield put({type: DATA_RECIEVE_FROM_API, payload: res})  
} 
function* actionWatcher() {
    yield takeLatest(GET_DATA_FROM_API, fetchProduct)
}

export default function* rootSaga() {
     yield all ([
         actionWatcher(),
     ])
}