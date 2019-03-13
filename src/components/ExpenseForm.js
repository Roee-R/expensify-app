import React from 'react';

import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import moment from 'moment';

export default class ExpenseForm extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            description: props.expense?props.expense.description:'',
            note: props.expense?props.expense.note:'',
            amount: props.expense?(props.expense.amount/100).toString():'',
            createdAt: props.expense?moment(props.expense.createdAt):moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({
            description
        }))
    }

    onNoteChange = (e)=>{
        const note = e.target.value;
        this.setState(()=>({
            note
        }))
    }

    onAmountChanage = (e) =>{
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){ //rejex for having max 2 decimal point
            this.setState(()=>({
                amount
            }))
        }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        if(this.state.description==='' || this.state.amount===''){
            this.setState(()=>({error: 'Please type decripction and expense amount'}))
        }
        else{
            this.setState(()=>({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                {this.state.error && <p>{this.state.error}</p>}
                <input 
                type="text"
                placeholder="Expense title"
                value={this.state.description}
                onChange={this.onDescriptionChange}
                autoFocus  />
                <input 
                type="number"
                placeholder="amount" 
                value={this.state.amount}
                onChange={this.onAmountChanage} />
                <SingleDatePicker
                date={this.state.createdAt} // momentPropTypes.momentObj or null
                onDateChange={createdAt => createdAt && this.setState({ createdAt })} // PropTypes.func.isRequired
                focused={this.state.calendarFocused} // PropTypes.bool
                onFocusChange={({ focused }) => this.setState({ calendarFocused:focused })} // PropTypes.func.isRequired
                numberOfMonths= {1}
                isOutsideRange={()=>false}
                // id="your_unique_id" // PropTypes.string.isRequired,
                />
                <textarea
                placeholder="Add a note for your expense"
                onChange={this.onNoteChange}
                value={this.state.note}
                >
                </textarea>
                <button>Add expense</button>
            </form>
        )
    }
}

export const pureComponentAvailable = true;
