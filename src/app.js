import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense,removeExpense} from '../src/actions/expenses';

import {addTextFilter} from '../src/actions/filters';
import getVisibleExpanse from '../src/selectors/expenses'
import './firebase/firebase'; // improt our firebase db

import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'; // airbnb class

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));

store.dispatch(addExpense({
    description:'Water bill',
    note: '1/11',
    amount: 500,
    createdAt: 150
}))
store.dispatch(addExpense({
    description:'Gaz bill',
    note: '1/11',
    amount: 700,
    createdAt: 250
}))
store.dispatch(addExpense({
    description:'Wifi bill',
    note: '1/11',
    amount: 333,
    createdAt: 350
}))
// let shopExp = store.dispatch(addExpense({
//     description:'Shops',
//     note: '22/11/19',
//     amount: 500,
//     createdAt: 150
// }))

// store.dispatch(addTextFilter('s'));

// const newExpanses = getVisibleExpanse(store.getState().expenses,store.getState().filter);







