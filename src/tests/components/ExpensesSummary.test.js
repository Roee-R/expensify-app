import React from 'react';
import { shallow } from 'enzyme';
import numeral from 'numeral';

import ExpensesSummary from '../../components/ExpensesSummary';

let sum,size;

describe('ExpensesSummary tests', ()=>{
    test('should retrun summary of several expenses',()=>{
        const wraper = shallow(<ExpensesSummary 
            size={3}
            sum={111}
            />);
        sum=numeral(111).format('$0,0.00');  
        const returnedText = `Viewing 3 expenses totalling $1.11`          
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('p').text()).toBe(returnedText);
    })

    test('should retrun summary of one expense',()=>{    
        const wraper = shallow(<ExpensesSummary 
            size={1}
            sum={11}
            />);
        sum=numeral(11).format('$0,0.00');            
        const returnedText = `Viewing 1 expense totalling $0.11`    
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('p').text()).toBe(returnedText);
    })
})