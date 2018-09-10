/**
 * Created by alond9990 on 10/09/2018.
 */

import { combineReducers } from 'redux';
import alertReducer from './alert.reducer';
import authReducer from './auth.reducer';
import registrationReducer from './registration.reducer';

export default combineReducers({
    alert: alertReducer,
    auth: authReducer,
    registration: registrationReducer
});