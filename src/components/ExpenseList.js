import React from 'react';
import { connect } from 'react-redux';

import getVisibleExpanse from '../selectors/expenses' // return sorted array
import ExpenseListItem from './ExpenseListItem'; // Return item from the list

export const ExpenseList = (props) =>(
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body">
            {props.expenses.length>0 
                ? (props.expenses.map((expense)=>{
                    return (<ExpenseListItem key={expense.id} 
                    index={props.expenses.indexOf(expense)}
                    {...expense} 
                    />)
                }))
                : (<div className="list-item list-item--message">
                    <span>No Expenses</span>
                </div>)
            }
        </div>
        
    </div>
)
const mapStateToProps = (state) =>{
    return {
        expenses: getVisibleExpanse(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);