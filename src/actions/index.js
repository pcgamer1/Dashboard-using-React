import stats from '../apis/stats'

export const signIn = (user) => {
    return {
        type: 'SIGN_IN',
        payload: user
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const fetchStats = () => async (dispatch) =>{
    const response = await stats.get('/test')
    dispatch({
        type: 'FETCH_STATS',
        payload: response.data
    })
}