import React from 'react';
import { shallow } from 'enzyme';

import {Header} from '../../components/Header';
// import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

test('should render Header correctly', ()=>{
    // new version with Enzyme

    const wraper = shallow(<Header startLogout={()=>{}}/>)
    expect(wraper).toMatchSnapshot();
    // expect(wraper.find('h1').length).toBe(1);
    // expect(wraper.find('h1').text()).toBe('Expensify');


    // old version with react-test-renderer/shallow
    // const renderer = new ShallowRenderer(); //Create new Rendere
    // renderer.render(<Header />) //activate render in our component
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); // first time snapsht and then each test it comparing bitween and new and the old 
    // console.log(renderer.getRenderOutput()) // get what the Header is rendered
})

test('should start logout on button click',()=>{
    const startLogoutSpy = jest.fn();
    const wraper = shallow(<Header startLogout={startLogoutSpy}/>)
    wraper.find('button').prop('onClick')();
    expect(startLogoutSpy).toHaveBeenCalled();
})