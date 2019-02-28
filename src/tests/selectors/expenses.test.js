import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses'; // expense DB

describe('Sort and Filter expenses', ()=>{
    test('Sould filter by text value', ()=>{
        const filter = {
            text : 'c', 
            sortBy :'date', 
            startDate:undefined, 
            endDate:undefined
        }
        const selector = selectExpenses(expenses,filter)
        expect(selector).toEqual([expenses[2],expenses[1]])
    })

    test('Should filter by start date', ()=>{
        const filter = {
            text : '', 
            sortBy :'date', 
            startDate:moment(0), 
            endDate:undefined
        }
        const selector = selectExpenses(expenses,filter)
        expect(selector).toEqual([expenses[2],expenses[0]])
    })

    test('Should filter by end date', ()=>{
        const filter = {
            text : '', 
            sortBy :'date', 
            startDate:undefined, 
            endDate:moment(11)
        }
        const selector = selectExpenses(expenses,filter)
        expect(selector).toEqual([expenses[0],expenses[1]])
    })

    test('Should sort by date', ()=>{
        const filter = {
            text : '', 
            sortBy :'date', 
            startDate:undefined, 
            endDate:undefined
        }
        const selector = selectExpenses(expenses,filter)
        expect(selector).toEqual([expenses[2],expenses[0],expenses[1]])
    })

    test('Should sort by amount', ()=>{
        const filter = {
            text : '', 
            sortBy :'amount', 
            startDate:undefined, 
            endDate:undefined
        }
        const selector = selectExpenses(expenses,filter)
        expect(selector).toEqual([expenses[1],expenses[2],expenses[0]])
    })
})