import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY,ADD_QUANTITY,
    ADD_TO_CART_JEWELRY,REMOVE_ITEM_JEWELRY,SUB_QUANTITY_JEWELRY,ADD_QUANTITY_JEWELRY,
    ADD_QUANTITY_SHOE,ADD_TO_CART_SHOE,REMOVE_ITEM_SHOE,SUB_QUANTITY_SHOE, ADD_TO_CART_SHIRT, REMOVE_ITEM_SHIRT, ADD_QUANTITY_SHIRT, SUB_QUANTITY_SHIRT,
    GET_DATA_FROM_API, DATA_RECIEVE_FROM_API
} from '../action/action-type/action-type';
import { act } from 'react-dom/test-utils';
import { store } from '../../store';

const INITIAL_STATE = {
    itemProduct: [
        {
            id: 1,
            title : 'Ciabatta',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph9-09-1024x1024.jpg',
            price: 220,
            linkUrl: 'Ciabatta'
        },
        {
            id: 2,
            title : 'Contrachroma',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/ph12-6.jpg',
            price: 120,
            linkUrl: 'Contrachroma'
        },
        {
            id: 3,
            title : 'Chocolate',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph10-05-1024x1024.jpg',
            price: 188,
            linkUrl: 'Chocolate'
        },
        {
            id: 4,
            title : 'Bread',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph9-05-1024x1024.jpg',
            price:  123,
            linkUrl: 'Bread'
        },
        {
            id: 5,
            title : 'Raisin',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph9-03-1024x1024.jpg',
            price: 248,
            linkUrl: 'Raisin'
        },
        {
            id: 6,
            title : 'Juice',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph10-11-1024x1024.jpg',
            price: 284,
            linkUrl: 'Juice'
        },
        {
            id: 7,
            title : 'Croissant',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph9-14-1024x1024.jpg',
            price: 372,
            linkUrl: 'Croissant'
        },
        {
            id: 8,
            title : 'Flatbread',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph9-13-1024x1024.jpg',
            price:   942,
            linkUrl: 'Flatbread'
        },
        {
            id: 9,
            title : 'Cow',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph10-09-1024x1024.jpg',
            price: 172,
            linkUrl: 'Cow'
        },
        {
            id: 10,
            title : 'Cheese',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph9-12-1024x1024.jpg',
            price:  932,
            linkUrl: 'Cheese'
        },
        {
            id: 11,
            title : 'Hard Dough Bread',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph10-08-1024x1024.jpg',
            price: 236,
            linkUrl: 'Hard'
        },
        {
            id: 12,
            title : 'Apple',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph10-14-1024x1024.jpg',
            price: 111,
            linkUrl: 'Apple'
        },
        {
            id: 13,
            title : 'Ciabatta',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/ph16-11-450x450.jpg',
            price: 220,
            linkUrl: 'Ciabatta'
        },
    ],
    jewelry: [  
        {
            id: 14,
            title : 'Aqueon Sealant',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/01-5.jpg',
            price: 451,
        }, 
        {
            id: 15,
            title : 'Aqueon Pailsey',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/02-5.jpg',
            price: 183,
        }, 
        {
            id: 16,
            title : 'Aqueon Sitted',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/04-5.jpg',
            price: 136,
        }, 
        {
            id: 17,
            title : 'Aqueon Belts',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/05-5.jpg',
            price: 451,
        }, 
        {
            id: 18,
            title : 'Aqueon Jewelry',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/06-4.jpg',
            price: 989,
        }, 
        {
            id: 19,
            title : 'Aqueon Fragence',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/07-4.jpg',
            price: 764,
        }, 
        {
            id: 20,
            title : 'Aqueon Scrapping',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/08-4.jpg',
            price: 835,
        }, 
        {
            id: 21,
            title : 'Aqueon General',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/09-4.jpg',
            price: 182,
        }, 
        {
            id: 22,
            title : 'Aqueon Material',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/10-4.jpg',
            price: 324,
        }, 
        {
            id: 23,
            title : 'Aqueon Mascara',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/11-3.jpg',
            price: 475,
        }, 
        {
            id: 24,
            title : 'Aqueon Digital',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/12-3.jpg',
            price: 981,
        }, 
        {
            id: 25,
            title : 'Aqueon Chanlinder',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/02/13-2.jpg',
            price: 461,
        }, 
],
    shoe: [
        {
            id: 26,
            title : 'Aqueon Sealant',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/01-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 27,
            title : 'Aqueon Pailsey',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/02-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 28,
            title : 'Aqueon Sitted',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/03-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 29,
            title : 'Aqueon Belts',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/04-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 30,
            title : 'Aqueon Jewelry',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/05-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 31,
            title : 'Aqueon Fragence',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/06-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 32,
            title : 'Aqueon Scrapping',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/07-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 33,
            title : 'Aqueon General',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/08-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 34,
            title : 'Aqueon Material',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/09-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 35,
            title : 'Aqueon Mascara',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/10-1024x1024.jpg',
            price: 461,
        }, 
        {
            id: 36,
            title : 'Aqueon Digital',
            imgUrl: 'https://demo2wpopal.b-cdn.net/ekommart/wp-content/uploads/2020/01/11-1024x1024.jpg',
            price: 461,
        }
    ],
    clothing: [
        {
            id: 37,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/bf/e6/bfe62420fc43f57ff8cc8071ada9c4f23e214ed7.jpg],origin[dam],category[ladies_hoodiesswetshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 38,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/b7/a5/b7a5071890a83a9cb63bf9943e86c8d58116a19f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 39,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/33/47/3347fe1a69a719b14eb9d3219793e260e1cc9bb9.jpg],origin[dam],category[ladies_hoodiesswetshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 40,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/64/19/64198e6993f89bcdef147ad5f6938e35126b17e1.jpg],origin[dam],category[ladies_hoodiesswetshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 41,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/70/c4/70c43970f02ed96c29c84ca0c0f2a6f8c87ce972.jpg],origin[dam],category[ladies_hoodiesswetshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 42,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/a0/75/a075c73e20e719717be025eaf70535ddf93fec3a.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 43,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/e0/63/e063cad1d1ece9cb725397ac0864c71e5397e31e.jpg],origin[dam],category[ladies_hoodiesswetshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 44,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/0c/b1/0cb175d722396b66d3af9cfebf98e151c684b521.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 45,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/6a/21/6a210ac05eb7c5f493a031343c22956f898f2005.jpg],origin[dam],category[ladies_hoodiesswetshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 46,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/8a/7b/8a7b85f02164310e7280271c39396f792cd33ea3.jpg],origin[dam],category[ladies_hoodiesswetshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 47,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/c2/81/c28180cdf7cd257d773de2ec78d9bb2ec5555faf.jpg],origin[dam],category[ladies_hoodiesswetshirts_sweatshirts],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]',
            price: 461,
        },
        {
            id: 48,
            title : 'Aqueon Digital',
            imgUrl: 'https://lp2.hm.com/hmgoepprod?set=source[/7f/29/7f29fba323ba453def2477570abc325752830efb.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]',
            price: 461,
        },
    ],
    addItems: [],
    total: 0,
    quantity: 0
}



const itemReducer = (state = INITIAL_STATE , action) => {
    if(action.type === ADD_TO_CART) {
         let addItem = state.itemProduct.find(item => item.id === action.id) // check if id exits in data
         let exit_item = state.addItems.find(item => item.id === action.id)
         if(exit_item) {
             addItem.quantity += 1
             return {
                 ...state,
                 total: state.total + addItem.price
             }
         }
         else {
             addItem.quantity = 1; 
             let newTotal = state.total + addItem.price  
             return {
                 ...state,
                 addItems: [...state.addItems, addItem],
                 total: newTotal
             }
         }
    }

    if(action.type === ADD_TO_CART_JEWELRY) {
        let addItem = state.jewelry.find(item => item.id === action.id) // check if id exits in data
        let exit_item = state.addItems.find(item => item.id === action.id)
        if(exit_item) {
            addItem.quantity += 1
            return {
                ...state,
                total: state.total + addItem.price
            }
        }
        else {
            addItem.quantity = 1; 
            let newTotal = state.total + addItem.price  
            return {
                ...state,
                addItems: [...state.addItems, addItem],
                total: newTotal
            }
        }
   }
   if(action.type === ADD_TO_CART_SHOE) {
    let addItem = state.shoe.find(item => item.id === action.id) // check if id exits in data
    let exit_item = state.addItems.find(item => item.id === action.id)
    if(exit_item) {
        addItem.quantity += 1
        return {
            ...state,
            total: state.total + addItem.price
        }
    }
    else {
        addItem.quantity = 1; 
        let newTotal = state.total + addItem.price  
        return {
            ...state,
            addItems: [...state.addItems, addItem],
            total: newTotal
        }
    }
}
if(action.type === ADD_TO_CART_SHIRT) {
    let addItem = state.clothing.find(item => item.id === action.id) // check if id exits in data
    let exit_item = state.addItems.find(item => item.id === action.id)
    if(exit_item) {
        addItem.quantity += 1
        return {
            ...state,
            total: state.total + addItem.price
        }
    }
    else {
        addItem.quantity = 1; 
        let newTotal = state.total + addItem.price  
        return {
            ...state,
            addItems: [...state.addItems, addItem],
            total: newTotal
        }
    }
}
    if(action.type === REMOVE_ITEM) {
        let itemRemove = state.addItems.find(item => action.id === item.id)
        let newItem = state.addItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemRemove.price * itemRemove.quantity)
        console.log(itemRemove);
        return {
            ...state,
            addItems: newItem,
            total: newTotal
        }
    }

    if(action.type === REMOVE_ITEM_JEWELRY) {
        let itemRemove = state.addItems.find(item => action.id === item.id)
        let newItem = state.addItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemRemove.price * itemRemove.quantity)
        console.log(itemRemove);
        return {
            ...state,
            addItems: newItem,
            total: newTotal
        }
    }
    if(action.type === REMOVE_ITEM_SHOE) {
        let itemRemove = state.addItems.find(item => action.id === item.id)
        let newItem = state.addItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemRemove.price * itemRemove.quantity)
        console.log(itemRemove);
        return {
            ...state,
            addItems: newItem,
            total: newTotal
        }
    }
    if(action.type === REMOVE_ITEM_SHIRT) {
        let itemRemove = state.addItems.find(item => action.id === item.id)
        let newItem = state.addItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemRemove.price * itemRemove.quantity)
        console.log(itemRemove);
        return {
            ...state,
            addItems: newItem,
            total: newTotal
        }
    }
      if(action.type === ADD_QUANTITY) {
       return {
           ...state,
           addItems: state.addItems.map(product => product.id === action.id 
            ? {...product, quantity: product.quantity + 1} : product)
       }
    }   

    if(action.type === ADD_QUANTITY_JEWELRY) {
        return {
            ...state,
            addItems: state.addItems.map(product => product.id === action.id 
             ? {...product, quantity: product.quantity + 1} : product)
        }
     }
     if(action.type === ADD_QUANTITY_SHOE) {
        return {
            ...state,
            addItems: state.addItems.map(product => product.id === action.id 
             ? {...product, quantity: product.quantity + 1} : product)
        }
     }
     if(action.type === ADD_QUANTITY_SHIRT) {
        return {
            ...state,
            addItems: state.addItems.map(product => product.id === action.id 
             ? {...product, quantity: product.quantity + 1} : product)
        }
     }
    /*
    if(action.type=== ADD_QUANTITY){
        let addItem = state.itemProduct.find(item=> action.id === item.id)
        addItem.quantity += 1 
          let newTotal = state.total + addItem.price
          return{
              ...state,
              total: newTotal
          }
    } */
    
    if(action.type === SUB_QUANTITY) {
        let addItem = state.addItems.find(item => item.id === action.id)
        // if item = 0 => remove
        if(addItem.quantity === 1) {
            let newItem = state.addItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addItem.price
            return {
                ...state,
                addItems: newItem,
                total: newTotal
            }
        }
        else {
            addItem.quantity -= 1
            let newTotal = state.total - addItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    } 


    if(action.type === SUB_QUANTITY_JEWELRY) {
        let addItem = state.addItems.find(item => item.id === action.id)
        if(addItem.quantity === 1) {
            let newItem = state.addItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addItem.price
            return {
                ...state,
                addItems: newItem,
                total: newTotal
            }
        }
        else {
            addItem.quantity -= 1
            let newTotal = state.total - addItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    } 
    if(action.type === SUB_QUANTITY_SHOE) {
        let addItem = state.addItems.find(item => item.id === action.id)
        if(addItem.quantity === 1) {
            let newItem = state.addItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addItem.price
            return {
                ...state,
                addItems: newItem,
                total: newTotal
            }
        }
        else {
            addItem.quantity -= 1
            let newTotal = state.total - addItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    } 
    if(action.type === SUB_QUANTITY_SHIRT) {
        let addItem = state.addItems.find(item => item.id === action.id)
        if(addItem.quantity === 1) {
            let newItem = state.addItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addItem.price
            return {
                ...state,
                addItems: newItem,
                total: newTotal
            }
        }
        else {
            addItem.quantity -= 1
            let newTotal = state.total - addItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    } 
    else {
        return state
    }
}

export default itemReducer