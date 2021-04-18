import {
    GET_CART_REQUEST,
    GET_CART_SUCCESS,
    GET_CART_FAILURE,
} from './cart.actions';

let initialState = {
    cart:[],
    cartLoading:true,
    cartError:"",
}

const cartReducers = (state = initialState, action) =>{
    switch(action.type){
        case GET_CART_REQUEST:
            return {
                ...state,
                cartLoading: true
            }
        case GET_CART_SUCCESS:
            return {
                ...state,
                cartLoading: false,
                cart: action.payload
                }
        case GET_CART_FAILURE:
            return {
                ...state,
                cartError: action.payload,
                cartLoading: false
            }
        default: 
        return state;
    }
}

export default cartReducers;