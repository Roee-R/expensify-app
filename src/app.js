import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 

import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses,addExpense,startAddExpense} from '../src/actions/expenses';
import {login, logout} from '../src/actions/auth';
import getVisibleExpanse from '../src/selectors/expenses'
import {firebase} from './firebase/firebase'; // improt our firebase db

import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'; // airbnb class

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRender = false; // verible to check if the user refresh the page, so the page render again
const renderApp = ()=>{
    if(!hasRender){
        ReactDOM.render(jsx,document.getElementById('app'));
        hasRender=true;
    }
}

ReactDOM.render(<p>Loading...</p>,document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{ // event hendler for every time user login/logout or refreshing the app
    if(user){ // if user login
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{ // dispatch expenses
            renderApp(); // use function to run ReactDOM , but just we the user reload the page
            if(history.location.pathname ==='/'){ // Check if the loged user on the root location
                history.push('/dashboard'); // Push to dashboard
            }
        })    
    }
    else{ // user is logout
        store.dispatch(logout()); // sent to auth reduser
        renderApp(); // render ReactDOM
        history.push('/') // push back to login page
    }
})








