import {GET_DATA_ARRIVAL,DATA_RECIEVE_ARRIVAL} from '../action/action-type/action-type'

const arrivalReducer = (state = {} , action) => {
     if(action.type === GET_DATA_ARRIVAL) {
          return {
              ...state
          }
     }
     else if(action.type === DATA_RECIEVE_ARRIVAL) {
          return {
              ...state,
              arrival: action.payload
          }
     }
     else {
         return {
             ...state
         }
     }
}

export default arrivalReducer 