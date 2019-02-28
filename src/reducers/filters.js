import moment from 'moment'

// expenses filter Reduser

const expensesFillterReduserDefaultState = { // default state
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'), // start the sort by the first of th current month (for default)
    endDate: moment().endOf('month')
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

export default expensesFilterReduser;