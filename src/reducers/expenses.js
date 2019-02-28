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

export default expensesReduser;