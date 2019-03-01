import React from 'react';
import { connect } from 'react-redux'; // import the connect the method of react-redux
import { DateRangePicker } from 'react-dates';

import {
    addTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate
} 
from '../actions/filters';

export class ExpenseListFilter extends React.Component {
    state = {
        calenderFucused: null
    }

    onDateChange = ({ startDate, endDate })=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onTextChange = (e)=>this.props.addTextFilter(e.target.value);

    onSortChange = (e)=>{
        if(e.target.value==='amount')
            return this.props.sortByAmount();
        return this.props.sortByDate();
    }
    
    render(){
        return ( // Component that connect to the store
            <div>
                <input type="text" Value={this.props.filters.sortBy}
                onChange={this.onTextChange}/>
                <select value={this.props.filters.sortBy}
                onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDateChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calenderFucused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ calenderFucused:focusedInput })} // PropTypes.func.isRequired, accept 'startDate' or 'endDate'
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state)=>({ // function that transfer states to components
    filters: state.filters
})

const mapDispatchToProps = (dispatch) =>({
    setStartDate: (startDate)=>dispatch(setStartDate(startDate)),
    setEndDate: (endDate)=>dispatch(setEndDate(endDate)),
    addTextFilter: (e)=>dispatch(addTextFilter(value)),
    sortByAmount: ()=>dispatch(sortByAmount()),
    sortByDate: ()=>dispatch(sortByDate())
})

export default connect(mapStateToProps,mapDispatchToProps)
(ExpenseListFilter); // connect the store to the component (to update store data) and link the mapStateToProps