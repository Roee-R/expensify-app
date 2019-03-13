import React from 'react';

import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';

describe('Expense list test', ()=>{
    test('should render ExpenseList with expenses', ()=>{
        const wraper = shallow(<ExpenseList 
            expenses={expenses}
            />) // get the ExpenseList page
        expect(wraper).toMatchSnapshot();
    })

    test('should render expense lst with exmpty message' ,()=>{
        const wraper = shallow(<ExpenseList expenses={[]} />)
        expect(wraper).toMatchSnapshot();
    })

})
