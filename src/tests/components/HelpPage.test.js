import React from 'react';

import expenses from '../fixtures/expenses';
import {shallow} from 'enzyme';
import HelpPage from '../../components/HelpPage';

describe('Help page test', ()=>{
    test('should render help page', ()=>{
        const wraper = shallow(<HelpPage />)
        expect(wraper).toMatchSnapshot();
    })
})

