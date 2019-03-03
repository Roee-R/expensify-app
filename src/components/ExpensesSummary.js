import React from 'react';
import numeral from 'numeral';

const ExpensesSummary = (props)=>{
    const size = props.size;
    const sum=numeral(props.sum/100).format('$0,0.00');
    return (
        <p>Viewing {size} {size>1? 'expenses ' : 'expense '}totalling {sum}
        </p> 
    )
}

export default ExpensesSummary
