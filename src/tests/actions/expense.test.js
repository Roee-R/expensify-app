import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {startAddExpense,addExpense, removeExpense, editExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

describe('Expense actions', ()=>{
    const createMockStore = configureMockStore([thunk]); // array of middlleware 

    test('Should remove exoense action object', ()=>{
        const action = removeExpense({id: '123abc'})
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        })
    })

    test('Should edit expense', ()=>{
        const action = editExpense('234asd',
            {
                Description: 'Hello World',
                note: 'First World'
            }
        )
        expect(action.type).toBe('EDIT_EXPENSE');
        expect(action.id).toBe('234asd');
        expect(action.updates).toEqual({
            Description: 'Hello World',
            note: 'First World'
        })
    })

    test('Should add new expense',()=>{
        const action=addExpense(expenses[1]);
        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expense: expenses[1]
        });
    })

    test('should add expense to database and to store',(done)=>{
        const store = createMockStore({});
        const expense = {
            description: 'Hatul',
            amount: 1000,
            note: 'Mizti the cat',
            createdAt: 123432 
        }
        store.dispatch(startAddExpense(expense)).then(()=>{
            const action = store.getActions(); // receive array of action
            expect(action[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expense
                }
            })

            return database.ref(`expenses/${action[0].expense.id}`).once('value'); // return another promise
        }).then((snapshot)=>{ // chaining promise to the return promise
            expect(snapshot.val()).toEqual(expense);
            done();
        })
    })

    test('shoudl add expense with default to database and store', (done)=>{
        const store = createMockStore({});
        const expense = {
            description: '',
            amount: 0,
            note: '',
            createdAt: 0 
        }
        store.dispatch(startAddExpense({})).then(()=>{
            const action = store.getActions(); // recive array of action
            expect(action[0]).toEqual({
                type: 'ADD_EXPENSE',
                expense: {
                    id: expect.any(String),
                    ...expense
                }
            })

            return database.ref(`expenses/${action[0].expense.id}`).once('value'); // return another promise
        }).then((snapshot)=>{ // chaining promise to the return promise
            expect(snapshot.val()).toEqual(expense);
            done();
        })
    })

    // test('Should add new expense with default value',()=>{
    //     const action=addExpense()
    //     const expenseObj= {
    //     type: 'ADD_EXPENSE',   
    //     expenses:{
    //         id: expect.any(String),
    //         description: '',
    //         note: '',
    //         amount: 0,
    //         createdAt: 0
    //     }
    // }
    //     expect(action).toEqual((expenseObj));

    // })
})