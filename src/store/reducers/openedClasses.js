const initialState = {
    isFetching: false,
    classes: []
}

const openedClassesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_OPENED_CLASSES_REQUEST': {
            return {
                ...state,
                isFetching: true
            }
        }
        case 'GET_OPENED_CLASSES_SUCCESS': {
            return {
                ...state,
                isFetching: false,
                classes: action.payload.classes
            }
        }
        case 'GET_OPENED_CLASSES_FAILURE': {
            return {
                ...state,
                errorCode: action.payload.errorCode,
                isFetching: false
            }
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

export default openedClassesReducer;