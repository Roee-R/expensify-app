import moment from 'moment';

import filterReducer from '../../reducers/filters.js';

describe('Filter reducers test', ()=>{
    test('should setup default filter values', ()=>{
        const state = filterReducer(undefined,{type: '@@init'});
        expect(state).toEqual({
            text: '',
            sortBy: 'amount',
            startDate: moment().startOf('month'), // start the sort by the first of th current month (for default)
            endDate: moment().endOf('month')
        })
    })

    test('should set sort by amount', ()=>{
        const state = filterReducer(undefined,{type: 'SORT_BY_AMOUNT'});
        expect(state.sortBy).toBe('amount');
    })
    test('should set sort by date' ,()=>{
        const filterState = {
            text: '',
            sortBy: 'amount',
            startDate: undefined,
            endDate: undefined
        };
        const state = filterReducer(filterState,{type: 'SORT_BY_DATE'});
        expect(state.sortBy).toBe('date');
    })

    test('should set text filter', ()=>{
        const state = filterReducer(undefined,{type:'FILTER_TEXT',text:'myau'})
        expect(state.text).toBe('myau');
    })

    test('should set start date filter', ()=>{
        const state = filterReducer(undefined,{type:'SET_START_DATE',date:moment(20)})
        expect(state.startDate).toEqual(moment(20));
    })

    test('should set end date filter', ()=>{
        const state = filterReducer(undefined,{type:'SET_END_DATE',date:moment(200)})
        expect(state.endDate).toEqual(moment(200));
    })
})