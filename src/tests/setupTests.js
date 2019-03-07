import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DotEnv from 'dotenv'
DotEnv.config({path: '.env.test'}); // setup test firebase env veribles

Enzyme.configure({
    adapter: new Adapter() 
})

