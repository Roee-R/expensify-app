import React from 'react';
import { shallow } from 'enzyme';

import LoadingPage from '../../components/LoadingPage';

describe('Loading Page tests', ()=>{
    test('should snapshot correctly', ()=>{
        const wraper = shallow(<LoadingPage />);
        expect(wraper).toMatchSnapshot();
    })
})