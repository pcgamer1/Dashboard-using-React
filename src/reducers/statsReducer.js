export default (state={}, action) => {
    if(action.type==='FETCH_STATS') 
        return {...state, ...action.payload}
    return state
}

