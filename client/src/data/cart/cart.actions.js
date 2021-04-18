import axios from 'axios';
//FETCH USER 
export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";


//GET USER
export const getCart = (user) => {

    return (dispatch) =>{

        dispatch(getCartRequest());

        if(user){

            const options = {
                method: 'GET',
                url: 'http://localhost:3001/cart',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              };
    
            axios.request(options).then(cart => {
                     dispatch(getCartSuccess(cart)); 
                }).catch(error => {
                    dispatch(getCartFailure(error));
                });
        }else{

            //dispatch(getCartSuccess(cart)); 
            //dispatch(getCartFailure(error));
        }
    };
};

export const getCartRequest = () =>{
    return {
        type: GET_CART_REQUEST,
    };
}; 
export const getCartSuccess = (cart) =>{
    return {
        type:GET_CART_SUCCESS,
        payload: cart
    };
}; 
export const getCartFailure = (error) =>{
    return {
        type:GET_CART_FAILURE,
        payload: error
    };
}; 
