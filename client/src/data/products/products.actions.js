import axios from 'axios';

//GET PRODUCTS 
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";
//GET PRODUCT
export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";



//GET PRODUCTS
export const getProducts = (products) => {

    return (dispatch) =>{

        dispatch(getProductsRequest());

        if(products){

            const options = {
                method: 'GET',
                url: 'http://localhost:3001/products',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              };
    
            axios.request(options).then(products => {
                     dispatch(getProductsSuccess(products.data)); 
                }).catch(error => {
                    dispatch(getProductsFailure(error));
                });
        }else{

            //dispatch(getCartSuccess(cart)); 
            //dispatch(getCartFailure(error));
        }
    };
};

export const getProductsRequest = () =>{
    return {
        type: GET_PRODUCTS_REQUEST,
    };
}; 
export const getProductsSuccess = (products) =>{
    return {
        type:GET_PRODUCTS_SUCCESS,
        payload: products
    };
}; 
export const getProductsFailure = (error) =>{
    return {
        type:GET_PRODUCTS_FAILURE,
        payload: error
    };
}; 

//GET PRODUCT
export const getProduct = (user, productId) => {

    return (dispatch) =>{

        dispatch(getProductRequest());

        if(user){

            const options = {
                method: 'GET',
                url: `http://localhost:3001/product/${productId}`,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              };
    
            axios.request(options).then(product => {
                     dispatch(getProductSuccess(product.data)); 
                }).catch(error => {
                    dispatch(getProductFailure(error));
                });
        }else{

            //dispatch(getCartSuccess(cart)); 
            //dispatch(getCartFailure(error));
        }
    };
};

export const getProductRequest = () =>{
    return {
        type: GET_PRODUCT_REQUEST,
    };
}; 
export const getProductSuccess = (products) =>{
    return {
        type:GET_PRODUCT_SUCCESS,
        payload: products
    };
}; 
export const getProductFailure = (error) =>{
    return {
        type:GET_PRODUCT_FAILURE,
        payload: error
    };
}; 