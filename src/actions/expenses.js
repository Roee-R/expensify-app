import uuid from 'uuid'; // generate id
import database from '../firebase/firebase'; // import database

 // Add expense 
 export const addExpense = (expense)=>({
    type: 'ADD_EXPENSE',
    expense
})

 // Async action to DB Add expense 
 // fetching the data and the dispatch action
   export const startAddExpense = (expensesData={}) =>{
       return (dispatch, getState)=>{
           const uid = getState().auth.uid;
           const {
               description='',
               note='',
               amount=0,
               createdAt=0
           } = expensesData;
           const expenses = {description,note ,amount,createdAt}
           return database.ref(`users/${uid}/expenses`).push(expenses).then((ref)=>{ // the return is for chaning promises
               dispatch(addExpense({
                   id: ref.key,
                   ...expenses
               }));
           });
       };
   };

// Remove expanse
export const removeExpense = ( {id} = {})=>(
        { // return OBJECT
            type: 'REMOVE_EXPENSE',
            id
        }   
    )

export const startRemoveExpense = ( {id} = {})=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({ id }))
        })
    }
}    
    
// Edit expanse

export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) =>{
    return(dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id, updates));
        });
    }
}

export const setExpenses = (expenses)=>({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            const expensesArray = [];
            snapshot.forEach(expense => {
                var newExpense = {id: expense.key, ...expense.val()};
                expensesArray.push(newExpense);
            });
            dispatch(setExpenses(expensesArray));
        })
    }
};