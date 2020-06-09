import { axios } from '../utils';

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

const signIn = (email, password, navigate) => {
    return async (dispatch) => {
        dispatch(signInRequest());
        try {
            let result = await axios.client.post('/users/tokens', {
                email,
                password
            }).then((response) => response.data);
            dispatch(signInSuccess(result.data.token));
            // insert token in every axios request
            axios.injectToken(result.data.token);
            dispatch(navigate);
        } catch (e) {
            dispatch(signInFailure(e.response.data.message));
        }
    }
}

export {
    signIn
}