import React from 'react';
import { connect } from 'react-redux';

import ExpanseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';

import selectdExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseDashboardPage = (props) =>{
    return(
    <div>
        <h1>Wellcome to my DashBoard component</h1>
        <ExpensesSummary 
            size={props.expensesSize}
            sum={props.sum}/>
        <ExpanseList
        />
    </div>    
        )
}


const mapStateToProps = (state) =>{
    const visibleExpenses = selectdExpenses(state.expenses, state.filters)
    const sum = selectExpensesTotal(visibleExpenses);
    return {
        expensesSize: visibleExpenses.length,
        sum
    }
}


export default connect(mapStateToProps)(ExpenseDashboardPage)
    
