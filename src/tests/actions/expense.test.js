import {addExpense, removeExpense, editExpense} from '../../actions/expenses';


describe('Expense actions', ()=>{
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
        const expenseData ={
        description: 'Myau',
        note: 'Mitzi hatul',
        amount: 1000,
        createdAt: 123
    }
        const action=addExpense(expenseData);

        expect(action).toEqual({
            type: 'ADD_EXPENSE',
            expenses: {id:expect.any(String),...expenseData}
        });
    })

    test('Should add new expense with default value',()=>{
        const action=addExpense()
        const expenseObj= {
        type: 'ADD_EXPENSE',   
        expenses:{
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    }
        expect(action).toEqual((expenseObj));

    })
})