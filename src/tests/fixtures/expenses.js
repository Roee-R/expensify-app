// test data base
import moment from 'moment'

export default [{
    id: 1, 
    description: "Gaz Bill",
    note: '10/12',
    amount: 123,
    createdAt: moment(11).valueOf()
},
{
    id: 2, 
    description: "Electric Bill",
    note: '2/12',
    amount: 555,
    createdAt: moment(11).subtract(3,'days').valueOf()
},
{
    id: 3, 
    description: "Credit Card",
    note: '1/11',
    amount: 323,
    createdAt: moment(11).add(3,'days').valueOf()
}] // test data