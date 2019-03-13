import moment from 'moment';

const filters= {
    test: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const altFilters= {
    test: 'bill',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0).add(4,'days')
}

export {filters, altFilters};