import {ADD_TO_CART,ADD_QUANTITY,ADD_TO_CART_JEWELRY,SUB_QUANTITY,REMOVE_ITEM,
    ADD_QUANTITY_JEWELRY,REMOVE_ITEM_JEWELRY,SUB_QUANTITY_JEWELRY,ADD_TO_CART_SHOE,
    ADD_QUANTITY_SHOE,REMOVE_ITEM_SHOE,SUB_QUANTITY_SHOE,ADD_QUANTITY_SHIRT,ADD_TO_CART_SHIRT,
    REMOVE_ITEM_SHIRT,SUB_QUANTITY_SHIRT

} from '../action/action-type/action-type'

export const addToCart = (id) => {  // action creator 
    return {
        type: ADD_TO_CART,
        id
    }
}

export const addToCartJewelry = (id) => {
    return {
        type: ADD_TO_CART_JEWELRY,
        id
    }
}

export const addToCartShoe = (id) => {
    return {
        type: ADD_TO_CART_SHOE,
        id
    }
}

export const addToCartShirt = (id) => {
    return {
        type: ADD_TO_CART_SHIRT,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const removeItemJewelry = (id) => {
    return {
        type: REMOVE_ITEM_JEWELRY,
        id
    }
}

export const removeItemShoe = (id) => {
    return {
        type: REMOVE_ITEM_SHOE,
        id
    }
}

export const removeItemShirt = (id) => {
    return {
        type: REMOVE_ITEM_SHIRT,
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}

export const subtractQuantityJewelry = (id) => {
    return {
        type: SUB_QUANTITY_JEWELRY,
        id
    }
}

export const subtractQuantityShoe = (id) => {
    return {
        type: SUB_QUANTITY_SHOE,
        id
    }
}

export const subtractQuantityShirt = (id) => {
    return {
        type: SUB_QUANTITY_SHIRT,
        id
    }
}

export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const addQuantityJewelry = (id) => {
    return {
        type: ADD_QUANTITY_JEWELRY,
        id
    }
}

export const addQuantityShoe = (id) => {
    return {
        type: ADD_QUANTITY_SHOE,
        id
    }
}

export const addQuantityShirt = (id) => {
    return {
        type: ADD_QUANTITY_SHIRT,
        id
    }
}

