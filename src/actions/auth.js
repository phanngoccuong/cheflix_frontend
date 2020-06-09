
import { axios, history } from '../utils';

const signInRequest = () => {
    return {
        type: 'SIGN_IN_REQUEST'
    }
}

const signInSuccess = (token) => {
    return {
        type: 'SIGN_IN_SUCCESS',
        payload: {
            token
        }
    }
}

const signInFailure = (message) => {
    return {
        type: 'SIGN_IN_FAILURE',
        payload: {
            message
        }
    }
}

const signIn = (email, password, history) => {
    return async (dispatch) => {
        dispatch(signInRequest());
        try {
            let result = await axios.client.post('/users/tokens', {
                email,
                password
            }).then((response) => response.data);
            dispatch(signInSuccess(result.data.token));
            // put token in local storage
            localStorage.setItem('token', result.data.token);
            // insert token in every axios request
            axios.injectToken(result.data.token);
            // redirect to home
            history.push('/');
        } catch (e) {
            console.log(e);
            dispatch(signInFailure('failed'));
        }
    }
}

const signUpRequest = () => {
    return {
        type: 'SIGN_UP_REQUEST'
    }
}

const signUpSuccess = () => {
    return {
        type: 'SIGN_UP_SUCCESS',
        payload: {
        }
    }
}

const signUpFailure = (message) => {
    return {
        type: 'SIGN_UP_FAILURE',
        payload: {
            message
        }
    }
}

const signUp = (email, password) => {
    return async (dispatch) => {
        dispatch(signUpRequest());
        try {
            let result = await axios.client.post('/users', {
                email,
                password
            }).then((response) => response.data);
            dispatch(signUpSuccess());
        } catch (e) {
            console.log(e);
            dispatch(signUpFailure('failed'));
        }
    }
}

export {
    signIn,
    signUp
}