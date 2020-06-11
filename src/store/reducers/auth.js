const initialState = {
    token: null,
    isLoggingIn: false,
    isRegistering: false,
    id: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN_REQUEST': {
            return {
                ...state,
                isLoggingIn: true
            };
        }
        case 'SIGN_IN_SUCCESS': {
            return {
                ...state,
                token: action.payload.token,
                id: action.payload.id,
                isLoggingIn: false,
                logInSuccess: true
            };
        }
        case 'SIGN_IN_FAILURE': {
            return {
                ...state,
                errorCode: action.payload.errorCode,
                isLoggingIn: false,
                logInSuccess: false
            };
        }
        case 'SIGN_UP_REQUEST': {
            return {
                ...state,
                isRegistering: true
            };
        }
        case 'SIGN_UP_SUCCESS': {
            return {
                ...state,
                isRegistering: false,
                registerSuccess: true
            };
        }
        case 'SIGN_UP_FAILURE': {
            return {
                ...state,
                errorCode: action.payload.errorCode,
                isRegistering: false,
                registerSuccess: false
            };
        }
        case 'RESET_STATE': {
            return {
                ...initialState
            }
        }
        default: {
            return state;
        }
    }
}

export default authReducer;