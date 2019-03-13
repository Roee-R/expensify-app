import React from 'react';
import authReducer from '../../reducers/auth';

describe('Auth reducers test', ()=>{
    test('Should set uid for login user', ()=>{
        const uid = 12314
        const action = {
            type: 'LOGIN',
            uid
        }
        const state = authReducer({},action);
        expect(state.uid).toBe(action.uid)
    })

    test('Should clear uid for logout user', ()=>{
        const action = {
            type: 'LOGOUT'
        }
        const state = authReducer({},action);
        expect(state).toEqual({});
    })
})
