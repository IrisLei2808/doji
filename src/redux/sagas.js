import {put , takeLatest, all} from 'redux-saga/effects';
import {DATA_RECIEVE_FROM_API, GET_DATA_FROM_API, DATA_RECIEVE_ARRIVAL , GET_DATA_ARRIVAL} from '../redux/item/action/action-type/action-type';

function* fetchProduct() {
    const json = yield fetch('https://5f07309b9c5c250016306abe.mockapi.io/productData2').then(response => response.json())
    console.log(json)
    yield put({type: DATA_RECIEVE_FROM_API, payload: json})  
}
function* fetchArrival() {
    const response = yield fetch('https://5f07309b9c5c250016306abe.mockapi.io/arrivalDirectory').then(res => res.json(), )
    console.log(response)
    yield put({type: DATA_RECIEVE_ARRIVAL, payload: response})
} 
function* actionWatcher() {
    yield takeLatest(GET_DATA_FROM_API, fetchProduct)
}

function* actionWatcher1() {
    yield takeLatest(GET_DATA_ARRIVAL, fetchArrival)
}


export default function* rootSaga() {
     yield all ([
         actionWatcher(),
         actionWatcher1()
     ])
}