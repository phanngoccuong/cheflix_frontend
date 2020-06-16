const initialState = {
    isFetching: false,
    isUpdating: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER_REQUEST': {
            return {
                ...state,
                isFetching: true
            }
        }
        case 'GET_USER_SUCCESS': {
            return {
                ...state,
                ...action.payload.user,
                isFetching: false,
            }
        }
        case 'GET_USER_FAILURE': {
            return {
                ...state,
                message: action.payload.message,
                isFetching: false
            }
        }
        case 'UPDATE_USER_REQUEST': {
            return {
                ...state,
                isUpdating: true
            }
        }
        case 'UPDATE_USER_SUCCESS': {
            return {
                ...state,
                ...action.payload.user,
                isUpdating: false,
            }
        }
        case 'UPDATE_USER_FAILURE': {
            return {
                ...state,
                message: action.payload.message,
                isUpdating: false
            }
        }
        case 'RESET_STATE': {
            return {
                ...initialState
            }
        }
        default:{
            return state;
        }
    }
}

export default userReducer;