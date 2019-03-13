const moment =require.requireActual('moment');

export default (timestamp=0)=>{
    return moment(timestamp); //add specific time to moment if no time has set
}