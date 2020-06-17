import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import openedClasses from './openedClasses';

const rootReducer = combineReducers({
    auth,
    user,
    openedClasses
});

export default rootReducer;
