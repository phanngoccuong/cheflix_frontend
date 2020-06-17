import { axios } from '../utils';

const getOpenedClassesRequest = () => {
    return {
        type: 'GET_OPENED_CLASSES_REQUEST'
    }
}

const getOpenedClassesSuccess = (classes) => {
    return {
        type: 'GET_OPENED_CLASSES_SUCCESS',
        payload: {
            classes
        }
    }
}

const getOpenedClassesFailure = (errorCode) => {
    return {
        type: 'GET_OPENED_CLASSES_FAILURE',
        payload: {
            errorCode
        }
    }
}

const getOpenedClasses = () => {
    return async (dispatch) => {
        try {
            dispatch(getOpenedClassesRequest());
            let result = await axios.client.get(`/classes?type=opened`).then(response => response.data);
            dispatch(getOpenedClassesSuccess(result.data.classes));
        } catch (e) {
            console.log(e.response.data.errorCode);
            dispatch(getOpenedClassesFailure(e.response.data.errorCode));
        }
    }
}

export {
    getOpenedClasses,
}