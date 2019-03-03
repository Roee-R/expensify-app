import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'; // expense DB

describe('ExpensesTotal select test', ()=>{
    test('should return 0 if no expense', ()=>{
        const sum = selectExpensesTotal([]);
        expect(sum).toBe(0);
    })
    test('should correctly add up a single expense', ()=>{
        const sum = selectExpensesTotal([expenses[0]]);
        expect(sum).toBe(123);
    })
    test('should correctly add up multiply expenses', ()=>{
        const sum = selectExpensesTotal(expenses);
        expect(sum).toBe(1001);
    })
})

