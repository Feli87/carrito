import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE,
} from './products.actions';


let initialState = {
    products:[],
    productsLoading:true,
    productsError:"",
    product:{},
    productLoading:true,
    productError:""
}

const productsReducers = (state = initialState, action) =>{
    switch(action.type){
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                productsLoading: true
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                productsLoading: false,
                products: action.payload
                }
        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
                productsError: action.payload,
                productsLoading: false
            }
        case GET_PRODUCT_REQUEST:
            return {
                ...state,
                productLoading: true
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                productLoading: false,
                product: action.payload
                }
        case GET_PRODUCT_FAILURE:
            return {
                ...state,
                productError: action.payload,
                productLoading: false
            }
        default: 
        return state;
    }
}

export default productsReducers;