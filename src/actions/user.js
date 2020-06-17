import moment from 'moment';

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

const getUserFailure = (errorCode) => {
    return {
        type: 'GET_USER_FAILURE',
        payload: {
            errorCode
        }
    }
}

const getUser = (id) => {
    return async (dispatch) => {
        try {
            dispatch(getUserRequest());
            let result = await axios.client.get(`/users/${id}`).then(response => response.data);
            dispatch(getUserSuccess(result.data.user));
        } catch (e) {
            console.log(e.response.data.errorCode);
            dispatch(getUserFailure(e.response.data.errorCode));
        }
    }
}

const updateUserRequest = () => {
    return {
        type: 'UPDATE_USER_REQUEST'
    }
}

const updateUserSuccess = (user) => {
    return {
        type: 'UPDATE_USER_SUCCESS'
    }
}

const updateUserFailure = (errorCode) => {
    return {
        type: 'UPDATE_USER_FAILURE',
        payload: {
            errorCode
        }
    }
}

const updateUser = (id, { address, phoneNumber, firstName, dateOfBirth }) => {
    return async (dispatch) => {
        try {
            dispatch(updateUserRequest());
            let result = await axios.client.put(`/users/${id}`, {
                address, phoneNumber, firstName, dateOfBirth
            }).then(response => response.data);
            dispatch(updateUserSuccess());
        } catch (e) {
            console.log(e.response.data.errorCode);
            dispatch(updateUserFailure(e.response.data.errorCode));
        }
    }
}

export {
    getUser,
    updateUser
}