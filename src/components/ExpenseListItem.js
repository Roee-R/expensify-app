import React from 'react';
import { Link } from 'react-router-dom'

const ExpenseListItem = ({id,index,description,amount,createdAt}) =>{
    return (
        <div>
            <Link to={`./edit/${id}`}>
                <h3>{index+1}. {description}</h3>
            </Link>
            <p>{amount}$ - {createdAt}</p>
        </div>
    )
}

export default ExpenseListItem;
