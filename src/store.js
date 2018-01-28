import { createStore, combineReducers, applyMiddleware } from 'redux';
import {reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const rootReducer = combineReducers({
    reducer,
    form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
