import React from 'react';
import { shallow } from 'enzyme';

import {LoginPage} from '../../components/LoginPage';

describe('Login page tests', ()=>{
    test('should snapshot correctly', ()=>{
        const wraper = shallow(<LoginPage />);
        expect(wraper).toMatchSnapshot();    
    })

    test('should call startLogin on click', ()=>{
        const startLoginspy = jest.fn();
        const wraper = shallow(<LoginPage startLogin={startLoginspy}/>);
        wraper.find('button').simulate('click');
        expect(startLoginspy).toHaveBeenCalled();    
    })
    
})