import { axios } from '../utils';
import * as authActions from './auth';
import * as userActions from './user';
import { } from './user';

const resetState = () => {
    return {
        type: 'RESET_STATE'
    }
}

const signOut = (navigate) => {
    return async (dispatch) => {
        dispatch(resetState());
        axios.removeToken();
        dispatch(navigate);
    }
}

export {
    authActions,
    userActions,
    signOut
}