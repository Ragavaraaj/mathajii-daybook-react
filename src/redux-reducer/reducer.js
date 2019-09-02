import * as actionType from  './actiontype'

const initialState = {
    title : "Mathaji DayBook",
    accessbynav : true,
    data :{
        date : "",
        project : "",
        particulars : "",
        amount :  "",
        moredata : "",
    },
}

const reducer = (state = initialState , action) =>{
    switch (action.type)
    {
        case actionType.CHANGE_TITLE:
            return {
                ...state,
                title : action.change_title !== "Home" ? action.change_title : initialState.title
            }
        case actionType.CHANGE_DATA:
            return {
                ...state,
                data : {
                    ...state.data, 
                    ...action.payload
                }
            }
        case actionType.CHANGE_ACCESSBYNAV:
            return {
                ...state,
                accessbynav : action.val
            }
        default :
            return state
    }
}

export default reducer