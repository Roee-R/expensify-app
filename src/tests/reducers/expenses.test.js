import expensesReducer from '../../reducers/expenses.js';
import expenses from '../fixtures/expenses'; // expense DB
import moment from 'moment';

describe('Expenses reducer tests', ()=>{
    test('should set default state values',()=>{
        const state = expensesReducer(undefined, '@@init');
        expect(state).toEqual([]);    
    })

    test('should remove expense by id', ()=>{
        const action = {
            type: 'REMOVE_EXPENSE',
            id: expenses[1].id
        }
        const state = expensesReducer(expenses,action);
        expect(state).toEqual([expenses[0],expenses[2]])
    })

    test('should not remove expense by id', ()=>{
        const action = {
            type: 'REMOVE_EXPENSE',
            id: -1
        }
        const state = expensesReducer(expenses,action);
        expect(state).toEqual(expenses)
    })

    test('should add a expense', ()=>{
        const action = {
        type: 'ADD_EXPENSE'    ,
        id: 4,
        expense: {
            id: 4,
            description: 'Shoping',
            note: '2/25',
            amount:750,
            createdAt: moment(30).valueOf()
        }
    }
        const state = expensesReducer(expenses, action);
        expect(state).toEqual([...expenses, action.expense]);
    })

    test('should edit expense', ()=>{
        const action = {
            type: 'EDIT_EXPENSE',
            id: expenses[1].id,
            updates: {
                id: expenses[1].id,
                description: 'Fight club',
                note: '2/25',
                amount:1750,
                createdAt: moment(32).valueOf()
            }
        }
        const state = expensesReducer(expenses, action);
        expect(state[1]).toEqual(action.updates);
    })

    test('should not edit expense by wrong id', ()=>{
        const action = {
            type: 'EDIT_EXPENSE'    ,
            id: -1,
            updates: {
                id: 2,
                description: 'Fight club',
                note: '2/25',
                amount:1750,
                createdAt: moment(32).valueOf()
            }
        }
        const state = expensesReducer(expenses, action);
        expect(state).toEqual(expenses);    
    })
})