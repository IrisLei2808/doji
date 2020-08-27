import {combineReducers} from 'redux';
import itemReducer from '../redux/item/reducer/item.reducer';
import apiReducer from '../redux/item/reducer/api.reducer';
import arrivalReducer from '../redux/item/reducer/arrival.reducer';

 const rootReducer = combineReducers({
    itemReducer,
    apiReducer,
    arrivalReducer
})

export default rootReducer