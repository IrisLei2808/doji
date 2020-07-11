import {combineReducers} from 'redux';
import directoryReducer from '../redux/directory/directory.reducer';
import itemReducer from '../redux/item/reducer/item.reducer';
import apiReducer from '../redux/item/reducer/api.reducer';

 const rootReducer = combineReducers({
    directory: directoryReducer,
    itemReducer,
    apiReducer
})

export default rootReducer