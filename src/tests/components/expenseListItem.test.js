import React from 'react';

import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';
import ExpensesListItem from '../../components/ExpenseListItem';

describe('Expense list item tests', ()=>{
    test('should render expenses with fixture data', ()=>{
        const expenseWithIndex = {...expenses[0], index:0}
        const wraper = shallow(<ExpensesListItem 
            {...expenseWithIndex} />) // get the ExpenseList page

        expect(wraper).toMatchSnapshot();
    })
})

