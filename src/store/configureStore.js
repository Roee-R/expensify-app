import { createStore, combineReducers, applyMiddleware, compose } 
from 'redux';
import thunk from 'redux-thunk'; // to run functions on to dispatch

import expensesReduser from '../reducers/expenses';
import expensesFilterReduser from '../reducers/filters';
import authReducer from '../reducers/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combineReducers - for combined Reducers
const store = ()=>(
    createStore( // inital the store 
    combineReducers({ // use the combine
        expenses: expensesReduser, // first reduser
        filters: expensesFilterReduser, // second reduser
        auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk)) // redux middleware to run function on disptach
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // react extension to use redux devtool on the chrome
))

export default store;