import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses,addExpense,startAddExpense} from '../src/actions/expenses';

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

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
    // store.dispatch(startAddExpense({
    //     description:'new',
    //     note: '1/11',
    //     amount: 500,
    //     createdAt: 150
    // })).then(()=>{
    //     ReactDOM.render(jsx,document.getElementById('app'));
    // })
    ReactDOM.render(jsx,document.getElementById('app'));
})










