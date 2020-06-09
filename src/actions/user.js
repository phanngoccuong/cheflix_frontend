import { axios } from '../utils';

const getUserRequest = () => {
    return {
        type: 'GET_USER_REQUEST'
    }
}

const getUserSuccess = (user) => {
    return {
        type: 'GET_USER_SUCCESS',
        payload: {
            user
        }
    }
}

const getUserFailure = (message) => {
    return {
        type: 'GET_USER_FAILURE',
        payload: {
            message
        }
    }
}

const getUser = () => {
    return async (dispatch) => {
        try {
            dispatch(getUserRequest());
            let result = await axios.client.get('/users/1').then(response => response.data);
            dispatch(getUserSuccess(result.data.user));
        } catch (e) {
            dispatch(getUserFailure(e.response.data.message));
        }
    }
}

export {
    getUser
}