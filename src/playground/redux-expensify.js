import { createStore, combineReducers } from 'redux';

import uuid from 'uuid'; // generate id

 // Add expense 
const addExpense = ( 
    { 
        description='', note='', amount=0, createdAt=0 // USING OBJECT DESTRUCTURIN
    } ={})=>(
        { // return OBJECT
            type: 'ADD_EXPENSE',
            expenses: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
            }
        }   
    )

// Remove expanse
const removeExpense = ({ id })=>(
        { // return OBJECT
            type: 'REMOVE_EXPENSE',
            id
        }   
    )
    
// Edit expanse

const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// expenses Reduser

const expensesReduserDefaultState = []; // default array state

// Create expensesReduser Reducer
const expensesReduser = (state = expensesReduserDefaultState, action)=>{ // action is the extra propeties that we delivar via reducer object TYPES functions like editExpense
    switch(action.type){
        case 'ADD_EXPENSE':{
            return [...state, action.expenses]; // ...state is new syntax for arrays "spearign array"
        }
        case 'REMOVE_EXPENSE':{
            return [...state].filter(( {id} )=>id!==action.id);
        }
        case 'EDIT_EXPENSE':{
            return state.map(( expense )=>{
                if(expense.id===action.id){
                    return {
                        ...expense, ...action.updates //{...expense} is new syntax for arrays "spearign object"
                    };
                }else{
                    return expense
                }
            })
        }
        default:{
            return state;
        }
    }
}

// expenses filter reduser Functions

// add filetrs text
const addTextFilter = (text='')=>({
    type: 'FILTER_TEXT',
    text
})

// add sort functions

const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () =>({
    type: 'SORT_BY_DATE'
})

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})
// expenses filter Reduser

const expensesFillterReduserDefaultState = { // default state
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
};

// CREATE expenses filter Reduser

const expensesFilterReduser = (state = expensesFillterReduserDefaultState, action)=>{ // Create expensesReduser Reducer
    switch(action.type){
        case 'FILTER_TEXT':{
            return {...state, text: action.text} //{...state} is new syntax for arrays "spearign object"
        }
        case 'SORT_BY_AMOUNT': {
            return {...state, sortBy: 'amount'}
        }
        case 'SORT_BY_DATE': {
            return {...state, sortBy: 'date'}
        }
        case 'SET_START_DATE': {
            return {...state, startDate: action.date}
        }
        case 'SET_END_DATE': {
            return {...state, endDate: action.date}
        }
        default:{
            return state;
        }
    }
}


// combineReducers - for combined Reducers
const store = createStore( // inital the store 
    combineReducers({ // use the combine
        expenses: expensesReduser, // first reduser
        filter: expensesFilterReduser // second reduser
    })
)

//subscribe
const unsubscribe = store.subscribe(()=>{ // call every time the state is change. 
    const state = store.getState();
    // sort handle function
    const expenses=getVisibleExpanse(state.expenses,state.filter);
    console.log(expenses); //getState filter and sorted expenses
})


// add expenses
const expenseOne = store.dispatch(addExpense({
    description:'Eating in Vitrina restaurant',
    amount:55555,
    createdAt: 500
}));

const expenseTwo = store.dispatch(addExpense({
    description:'Eating in Petricks bar',
    amount:123,
    createdAt: 150
}));

const expenseFree = store.dispatch(addExpense({
    description:'buing in Fashion MAll',
    amount:12342,
    createdAt: 700
}));

// filter dispatches

// set start and end date for filtering
store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

// filter by text value
store.dispatch(addTextFilter('eat'));
store.dispatch(addTextFilter());

// sort by amount and the by date
store.dispatch(sortByAmount());
store.dispatch(sortByDate());


// Remove expense
store.dispatch(removeExpense({id: expenseOne.expenses.id})); //remove expense

//Edit expanse
store.dispatch(editExpense(expenseTwo.expenses.id, {amount: 2000})) // edit expanse



// demo of the desired State
const demoState = {
    expenses: [{
        id: 'poijasdfhwer',
        description: 'January Rent',
        note: 'This was the last payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}