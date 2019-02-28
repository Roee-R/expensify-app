import React from 'react';
import {shallow} from 'enzyme';
import { AddExpensePage } from "../../components/AddExpensePage";

import expenses from '../fixtures/expenses';

let addExpenseSpy, historySpy, wraper;

beforeEach(()=>{
    addExpenseSpy = jest.fn(); // set spy fucntion
    historySpy= {push: jest.fn()};
    wraper = shallow(<AddExpensePage 
        history={historySpy}
        addExpense={addExpenseSpy}/>)
})

describe('Expense page tests', ()=>{
    test('should render AddExpensePage correctly', ()=>{
        expect(wraper).toMatchSnapshot();
    })

    test('should handle on submit', ()=>{
        wraper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
        expect(historySpy.push).lastCalledWith('/');
        expect(addExpenseSpy).toHaveBeenCalledWith(expenses[1]);    
    })
})