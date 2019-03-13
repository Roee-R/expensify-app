import moment from 'moment'

// sort and filter function
const getVisibleExpense = (expenses,{text, sortBy, startDate, endDate})=>{ // destructuring

    return expenses.filter((expense)=>{ // filter return just values with number bitween start date andend date
            const momentCreatedAt= moment(expense.createdAt)
            const startDateMatch=startDate?startDate.isSameOrBefore(momentCreatedAt, 'day'):true
            const endDateMatch=endDate?momentCreatedAt.isSameOrBefore(endDate, 'day'):true   
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()); 

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a,b)=>{ // sorting by amount or by date
            if(sortBy.toLowerCase()==='amount')
                return b.amount-a.amount;
            else if(sortBy.toLowerCase()==='date'){
                return b.createdAt-a.createdAt; 
            }   
        })  
}

export default getVisibleExpense;