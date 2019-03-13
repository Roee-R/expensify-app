import React from 'react';

import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

describe('Not found page test', ()=>{
    test('should render not found page', ()=>{
        const wraper = shallow(<NotFoundPage />)
        expect(wraper).toMatchSnapshot();
    })
})
