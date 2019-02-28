// expenses filter reduser Functions

// add filetrs text
export const addTextFilter = (text='')=>({
    type: 'FILTER_TEXT', // for case starcture in the reduces
    text // send an object data to the reducer
})

// add sort functions

export const sortByAmount = () =>({
    type: 'SORT_BY_AMOUNT'
})

export const sortByDate = () =>({
    type: 'SORT_BY_DATE'
})

export const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

export const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})