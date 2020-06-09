const initialState = {
    token: null,
    isLoggingIn: false,
    isRegistering: true
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
                isLoggingIn: false
            };
        }
        case 'SIGN_IN_FAILURE': {
            return {
                ...state,
                message: action.payload.message,
                isLoggingIn: false
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
                isRegistering: false
            };
        }
        case 'SIGN_UP_FAILURE': {
            return {
                ...state,
                message: action.payload.message,
                isRegistering: false
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