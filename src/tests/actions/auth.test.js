import React from 'react';

import { login, logout} from '../../actions/auth';

describe('Auth.js tests', ()=>{
    test('should return login object as expected', ()=>{
        const uid = 123124142;
        const loginObj = login(uid);
        expect(loginObj).toEqual({
            type: 'LOGIN',
            uid
        })
    })

    test('should return logout object as expected', ()=>{
        const loginObj = logout();
        expect(loginObj).toEqual({
            type: 'LOGOUT'
        })
    })
})