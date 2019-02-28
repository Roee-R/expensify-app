import uuid from 'uuid'; // generate id

 // Add expense 
 export const addExpense = ( 
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