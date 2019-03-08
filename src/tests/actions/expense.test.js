import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    startAddExpense,
    addExpense, 
    removeExpense, 
    editExpense, 
    setExpenses,
    startSetExpenses,
    startRemoveExpense
} 
    from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

describe('Expense actions', ()=>{
    const createMockStore = configureMockStore([thunk]); // array of middlleware 

    beforeEach((done)=>{
        const expenseData = {};
        expenses.forEach(({id,description, note,amount,createdAt})=>{
            expenseData[id]={description, note,amount,createdAt};
        })
        database.ref('expenses').set(expenseData).then(()=>done());
    })

    test('Should remove exoense action object', ()=>{
        const action = removeExpense({id: '123abc'})
        expect(action).toEqual({
            type: 'REMOVE_EXPENSE',
            id: '123abc'
        })
    })

    test('should remove expenses from firebase', (done)=>{
        const store = createMockStore();
        const id = expenses[1].id;
        store.dispatch(startRemoveExpense({ id })).then(()=>{
            const action = store.getActions();
            expect(action[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            })
            return database.ref(`expenses/${id}`).once('value'); // return another promise
        }).then((snapshot)=>{
            expect(snapshot.val()).toBeFalsy();
            done();
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

    test('should set expense action object with data', ()=>{
        const action = setExpenses(expenses);
        expect(action).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
    })

    test('should fatch the expenses from firebase', (done)=>{
        const store = createMockStore();
        store.dispatch(startSetExpenses()).then(()=>{
            const action = store.getActions();
            expect(action[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            })
            done();
        })
    })
})