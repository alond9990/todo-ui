/**
 * Created by alond9990 on 10/09/2018.
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../_reducers';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunkMiddleware)
    )
);

export default store;
