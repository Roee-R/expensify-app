import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpensesSummary = (props)=>{
    const size = props.size;
    const sum=numeral(props.sum/100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{size}</span>
                 {size>1? ' expenses ' : ' expense '}totalling <span>{sum}</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

export default ExpensesSummary
