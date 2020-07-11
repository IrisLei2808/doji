import {GET_DATA_FROM_API, DATA_RECIEVE_FROM_API} from '../action/action-type/action-type'

const apiReducer = (state = {} , action) => {
    if(action.type === GET_DATA_FROM_API ) { // cái này reducer mà ông, ông có xem thiếu đoạn nào k , ko ma ta, ông tạo 1 component thứ tui gọi cho mà xem, hoặc có component nào có sẵn cũng đc 
        return {
            ...state,
            loading: true
        }
    }
    else if(action.type === DATA_RECIEVE_FROM_API) {
        // yied put({type: DATA_RECIEVE_FROM_API, json: res}), doạn này sẽ trigger cái action này vay tui o component tui goi cai thang news ha, uk
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