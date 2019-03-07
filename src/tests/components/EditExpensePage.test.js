import React from 'react';
import { shallow } from 'enzyme';

import {EditExpensePage} from '../../components/EditExpansePage';
import expenses from '../fixtures/expenses';

let wraper, editExpenseSpy, removeExpenseSpy,historySpy;

beforeEach(()=>{
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy= {push: jest.fn()};
    wraper = shallow (<EditExpensePage
        expense={expenses[0]} 
        editExpense={editExpenseSpy}
        removeExpense={removeExpenseSpy}
        history={historySpy}/>)
})
describe('Edit Expense page testing', ()=>{
    test('should render edit expense page', ()=>{
        expect(wraper).toMatchSnapshot();
    })

    test('should handle edit expense spy', ()=>{
        const newExpense = {...expenses[0], amount: 500};
        wraper.find('ExpenseForm').prop('onSubmit')(newExpense);
        expect(historySpy.push).lastCalledWith('/');
        expect(editExpenseSpy).toHaveBeenCalledWith(expenses[0].id, newExpense);
    })

    test('should handle remove expense spy', ()=>{
        wraper.find('button').prop('onClick')();
        expect(historySpy.push).lastCalledWith('/');
        expect(removeExpenseSpy).toHaveBeenCalledWith({id:expenses[0].id});
    })
})