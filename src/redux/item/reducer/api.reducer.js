import {GET_DATA_FROM_API, DATA_RECIEVE_FROM_API} from '../action/action-type/action-type'

const apiReducer = (state = {} , action) => {
    if(action.type === GET_DATA_FROM_API ) { 
        return {
            ...state,
            loading: true
        }
    }
    else if(action.type === DATA_RECIEVE_FROM_API) {
        return {
            ...state,
            news: action.payload, 
            loading: false
        }
    }
    else {
        return {
            ...state
        }
    }
}

export default apiReducer