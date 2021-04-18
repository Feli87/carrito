import axios from 'axios';
//FETCH USER 
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";


//GET USER
export const fetchUser = () => {

    return (dispatch) =>{

        dispatch(getUserRequest())
        const options = {
            method: 'GET',
            url: 'http://localhost:3001/profile',
            params: {
                secret_token: localStorage.getItem('token'),
                email: localStorage.getItem('email')
            },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          };

        axios.request(options).then(user => {
                 dispatch(getUserSuccess(user)); 
            }).catch(error => {
                dispatch(getUserFailure(error));
            });
    };
};

export const getUserRequest = () =>{
    return {
        type: GET_USER_REQUEST,
    };
}; 
export const getUserSuccess = (user) =>{
    return {
        type:GET_USER_SUCCESS,
        payload: user
    };
}; 
export const getUserFailure = (error) =>{
    return {
        type:GET_USER_FAILURE,
        payload: error
    };
}; 
