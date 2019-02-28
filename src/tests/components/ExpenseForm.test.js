import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from "../fixtures/expenses";

describe('Expense form tests', ()=>{
    test('should render expense form correctly', ()=>{
        const wraper = shallow(<ExpenseForm />);
        expect(wraper).toMatchSnapshot();
    })

    test('should render expense form with expense data', ()=>{
        const wraper = shallow(<ExpenseForm 
            expense={expenses[2]}
            />);
        expect(wraper).toMatchSnapshot();
    })

    test('should render error for invalid form submission', ()=>{
        const wraper = shallow(<ExpenseForm />)
        expect(wraper).toMatchSnapshot();
        wraper.find('form').simulate('submit', { // Make a submit simulation
            preventDefault: () => {} // to recodnize preventDefault
        })
        expect(wraper.state('error').length).toBeGreaterThan(0); // check if error exist
        expect(wraper).toMatchSnapshot(); // take a snapshot
    })

    test('should set description on input change', ()=>{
        const wraper = shallow(<ExpenseForm />)
        wraper.find('input').at(0).simulate('change', { // find our first input in the array == 'text' and simulate edit description input
            target:{
                value: 'Changed descriotion'
            }
        })
        expect(wraper.state('description')).toBe('Changed descriotion'); // check if the description state has changed
    })

    test('should set note on text area change', ()=>{
        const wraper = shallow(<ExpenseForm />)
        wraper.find('textarea').simulate('change', { // find our first input == 'text' and simulate edit description
            target:{
                value: 'Changed note'
            }
        })
        expect(wraper.state('note')).toBe('Changed note'); // check if the description state has changed
    })
    
    test('should set amount if invalid input', ()=>{
        const wraper = shallow(<ExpenseForm />);
        wraper.find('input').at(1).simulate('change', {
            target:{
                value: '12.123'
            }
        })
        expect(wraper.state('amount').length).toBe(0);
    })
    test('should set amount if valid input', ()=>{
        const wraper = shallow(<ExpenseForm />);
        wraper.find('input').at(1).simulate('change', {
            target:{
                value: '12.12'
            }
        })
        expect(wraper.state('amount')).toBe('12.12');
    })

    test('should call on submit prop for valid form submition', ()=>{
        const onSubmitSpy = jest.fn(); // set spy fucntion
        const wraper = shallow(<ExpenseForm 
            expense={expenses[0]} // send the expense by props
            onSubmit={onSubmitSpy}/> ) // send the spy function instead of the real.
        wraper.find('form').simulate('submit', { // Make a submit simulation
            preventDefault: () => {} // to recodnize preventDefault
        },)
        expect(wraper.state('error').length).toBe(0);
        expect(onSubmitSpy).toHaveBeenLastCalledWith({ // check if the function onSubmit has been called
            description: expenses[0].description,
            amount: expenses[0].amount,
            createdAt: expenses[0].createdAt.valueOf(),
            note: expenses[0].note
        })
    })

    test('should set new date on date range', ()=>{
        const wraper = shallow(<ExpenseForm />);
        wraper.find('withStyles(SingleDatePicker)').prop('onDateChange')(moment());
        expect(wraper.state('createdAt')).toEqual(moment());
    })

    test('should set calender focus on change', ()=>{
        const wraper = shallow(<ExpenseForm />);
        wraper.find('withStyles(SingleDatePicker)').prop('onFocusChange')
        ({focused:true});
        expect(wraper.state('calendarFocused')).toBeTruthy();
    })
})