import { createStore } from 'redux'

const incrementCount = ({incrementBy=1}={})=>({ // create function for INCRECMENT 
    type: 'INCRECMENT',
    incrementBy
})

const decrementCount = ({decrementBy = 1}={})=>({ // create function for DECRECMENT 
    type: 'DECREMENT',
    decrementBy
})

const resetCount = ()=>({ // create function for DECRECMENT 
    type: 'RESET'
})

// Reduses are pure functions
// never change state state or actions
const countReducer = (state= { count:0 }, action)=>{
    switch(action.type){
        case 'INCRECMENT':
            return {
                'count': state.count+action.incrementBy
            }
        case 'DECREMENT':
            return {
                'count': state.count-action.decrementBy
            }
        
        case 'RESET':
            return {
                'count': 0
            }
        default:
            return state;  
        }
}
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(countReducer);

//subscribe
let unsubscribe = store.subscribe(()=>{ // call every time the state is change. 
    console.log(store.getState()); //getState
})

//redux actions dispatch - an object that gets send to the store
// in our example our actions are: incresment, decresment, reset
store.dispatch(incrementCount({'incrementBy': 5}));

store.dispatch(incrementCount()); // redux action to freform some operation on the state

// (unsubscribe()); //we can also call this function in specific line in the code.

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({'decrementBy': 19}));


