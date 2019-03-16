import React from 'react';
import { connect } from 'react-redux'; // import the connect the method of react-redux

import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses'

export class AddExpensePage extends React.Component{
    onSubmit=(expenses)=>{
        this.props.startAddExpense(expenses);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    onSubmit={this.onSubmit}
                    />
                </div>
            </div>   
        )
    }
}

const mapDispatchToProps = (dispatch)=>({ // function that transfer dispatch to components
    startAddExpense: (expenses)=>dispatch(startAddExpense(expenses)) // use abtract dispatch to use on the web and on the tests
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage); // connect the store to the component (to update store data) and link the mapStateToProps

