import React from 'react';
import { connect } from 'react-redux'; // import the connect the method of react-redux

import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses'

export class AddExpensePage extends React.Component{
    onSubmit=(expenses)=>{
        this.props.addExpense(expenses);
        this.props.history.push('/');
    }
    render(){
        return (
            <div>
                <h1>Wellcome from my add expense component</h1>
                <ExpenseForm 
                onSubmit={this.onSubmit}
                />
            </div>   
        )
    }
}

const mapDispatchToProps = (dispatch)=>({ // function that transfer dispatch to components
    addExpense: (expenses)=>dispatch(addExpense(expenses)) // use abtract dispatch to use on the web and on the tests
})

export default connect(undefined,mapDispatchToProps)(AddExpensePage); // connect the store to the component (to update store data) and link the mapStateToProps

