import { axios, history } from '../utils';
import * as authActions from './auth';
import * as userActions from './user';
import { } from './user';

const resetState = () => {
    return {
        type: 'RESET_STATE'
    }
}

const signOut = (history) => {
    return (dispatch) => {
        dispatch(resetState());
        // remove token from axios header
        axios.removeToken();
        // remove from local storage
        localStorage.removeItem('token');
        // redirect to login
        history.push('/login');
    }
}

export {
    authActions,
    userActions,
    signOut
}