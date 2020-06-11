
import { axios, history } from '../utils';

const signInRequest = () => {
    return {
        type: 'SIGN_IN_REQUEST'
    }
}

const signInSuccess = ({ token, id }) => {
    return {
        type: 'SIGN_IN_SUCCESS',
        payload: {
            token,
            id
        }
    }
}

const signInFailure = (errorCode) => {
    return {
        type: 'SIGN_IN_FAILURE',
        payload: {
            errorCode
        }
    }
}

const signIn = (email, password, history, showMessage) => {
    return async (dispatch) => {
        dispatch(signInRequest());
        try {
            let result = await axios.client.post('/users/tokens', {
                email,
                password
            }).then((response) => response.data);
            dispatch(signInSuccess(result.data));
            // put token in local storage
            localStorage.setItem('token', result.data.token);
            // put id in local storage
            localStorage.setItem('id', result.data.id);
            // insert token in every axios request
            axios.injectToken(result.data.token);
            // redirect to home
            history.push('/');
            showMessage();
        } catch (e) {
            dispatch(signInFailure(e.response.data.errorCode));
            showMessage(e.response.data.errorCode);
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

const signUpFailure = (errorCode) => {
    return {
        type: 'SIGN_UP_FAILURE',
        payload: {
            errorCode
        }
    }
}

const signUp = (email, password, history, showMessage) => {
    return async (dispatch) => {
        dispatch(signUpRequest());
        try {
            let result = await axios.client.post('/users', {
                email,
                password
            }).then((response) => response.data);
            dispatch(signUpSuccess());
            history.push('/login');
            showMessage();
        } catch (e) {
            dispatch(signUpFailure(e.response.data.errorCode));
            showMessage(e.response.data.errorCode);
        }
    }
}

export {
    signIn,
    signUp
}