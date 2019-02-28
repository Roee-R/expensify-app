import { createStore, combineReducers } from 'redux';
import expensesReduser from '../reducers/expenses';
import expensesFilterReduser from '../reducers/filters';

// combineReducers - for combined Reducers
const store = ()=>(
    createStore( // inital the store 
    combineReducers({ // use the combine
        expenses: expensesReduser, // first reduser
        filters: expensesFilterReduser // second reduser
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // react extension to use redux devtool on the chrome
))

export default store;