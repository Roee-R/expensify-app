import React from 'react';
import { shallow } from 'enzyme'

import { ExpenseListFilter } from '../../components/ExpenseListFilter';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy,
setStartDateSpy, setEndDateSpy,wraper;

beforeEach(()=>{
    setTextFilterSpy = jest.fn();
    sortByDateSpy = jest.fn();
    sortByAmountSpy = jest.fn();
    setStartDateSpy = jest.fn();
    setEndDateSpy = jest.fn();
    
    wraper = shallow(<ExpenseListFilter 
        filters={filters}   
        setStartDate= {setStartDateSpy}
        setEndDate={setEndDateSpy}
        addTextFilter={setTextFilterSpy}
        sortByAmount={sortByAmountSpy}
        sortByDate={sortByDateSpy}
        />);
})

describe('Expense list filter tests', ()=>{
    test('should render ExpenseListFilter', ()=>{
        expect(wraper).toMatchSnapshot();
    })

    test('should render ExpenseListFilter with alt data', ()=>{
        wraper.setProps({ // changing the props of our component to our second filter obj(altFillters)
            filters: altFilters
        })
        expect(wraper).toMatchSnapshot();
    })

    test('should handle addTextFilter', ()=>{
        wraper.find('input').prop('onChange')({
            target: {
                value: 'rent'
            }
        })
        expect(setTextFilterSpy).toHaveBeenLastCalledWith('rent');
    })

    test('should sort by date', ()=>{
        wraper.setProps({ // changing the props of our component to our second filter obj(altFillters)
            filters: {...filters, sortBy: 'amount'}
        })
        wraper.find('select').prop('onChange')({
            target: {
                value: 'date'
            }
        })
        expect(sortByDateSpy).toHaveBeenCalled();
    })

    test('should sort by amount', ()=>{
        wraper.find('select').prop('onChange')({
            target: {
                value: 'amount'
            }
        })
        expect(sortByAmountSpy).toHaveBeenCalled();
    })

    test('should handle date change', ()=>{
        const dates ={
            startDate: moment(),
            endDate: moment().add(4, 'days')
        }
        wraper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
            startDate: dates.startDate,
            endDate: dates.endDate
        })
        expect(setStartDateSpy).toHaveBeenCalledWith(dates.startDate);
        expect(setEndDateSpy).toHaveBeenCalledWith(dates.endDate);
    })

    test('should handle date focus change', ()=>{
        const calenderFucused= 'endDate';
        wraper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFucused);
        expect(wraper.state('calenderFucused')).toBe(calenderFucused);
    })
})