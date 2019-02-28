import {
    setStartDate, setEndDate,sortByAmount,sortByDate,addTextFilter
} from '../../actions/filters';
import moment from 'moment';

describe('Filters testing', ()=>{
    test('Should generate set start date action object',()=>{
        const action = setStartDate(moment(0))
        expect(action).toEqual({type: 'SET_START_DATE',date: moment(0)});
    })

    test('Should generate set end date action object',()=>{
        const action = setEndDate(moment(100))
        expect(action).toEqual({type: 'SET_END_DATE',date: moment(100)});
    })

    test('Should generate set sort by amount',()=>{
        const action = sortByAmount()
        expect(action).toEqual({type: 'SORT_BY_AMOUNT'});
    })

    test('Should generate set sort by date',()=>{
        const action = sortByDate()
        expect(action).toEqual({type: 'SORT_BY_DATE'});
    })

    test('Should generate text filter',()=>{
        const action = addTextFilter('Bill')
        expect(action).toEqual({type: 'FILTER_TEXT',text:'Bill'});
    })

    test('Should generate default text filter',()=>{
        const action = addTextFilter()
        expect(action).toEqual({type: 'FILTER_TEXT',text:''});
    })
})