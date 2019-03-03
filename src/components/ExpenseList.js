import React from 'react';
import { connect } from 'react-redux';

import getVisibleExpanse from '../selectors/expenses' // return sorted array
import ExpenseListItem from './ExpenseListItem'; // Return item from the list
import ExpenseListFilter from './ExpenseListFilter'; // filtering by name

export const ExpenseList = (props) =>(
    <div>
        <ExpenseListFilter />
        {props.expenses.length>0 
        ? (props.expenses.map((expense)=>{
            return (<ExpenseListItem key={expense.id} 
            index={props.expenses.indexOf(expense)}
            {...expense} 
            />)
        }))
        : (<h3>No expenses</h3>)
    }
        
    </div>
)
const mapStateToProps = (state) =>{
    return {
        expenses: getVisibleExpanse(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);