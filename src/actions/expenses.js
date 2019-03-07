import uuid from 'uuid'; // generate id
import database from '../firebase/firebase'; // import database

 // Add expense 
 export const addExpense = (expense)=>({
    type: 'ADD_EXPENSE',
    expense
})

   export const startAddExpense = (expensesData={}) =>{
       return (dispatch)=>{
           const {
               description='',
               note='',
               amount=0,
               createdAt=0
           } = expensesData
           const expenses = {description,note ,amount,createdAt}
           return database.ref('expenses').push(expenses).then((ref)=>{ // the return is for chaning promises
               dispatch(addExpense({
                   id: ref.key,
                   ...expenses
               }));
           });
       };
   };

// Remove expanse
export const removeExpense = ({id})=>(
        { // return OBJECT
            type: 'REMOVE_EXPENSE',
            id
        }   
    )
    
// Edit expanse

export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id,
    updates
})