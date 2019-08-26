import * as actionType from  './actiontype'

const initialState = {
    title : "Hello world",
    data :{
        date : "",
        project : "",
        particulars : "",
        amount :  "",
        moredata : "",
    },
    formselect : {
        tag : "",
        clicked : false,
    }

}

const reducer = (state = initialState , action) =>{
    switch (action.type)
    {
        case actionType.CHANGE_TITLE:
            return {
                ...state,
                title : action.change_title
            }
        case actionType.CHANGE_DATA:
            return {
                ...state,
                data : {
                    ...state.data, 
                    ...action.payload
                }
            }
        case actionType.CHANGE_FORM_SELECT:
            return {
                ...state,
                title : action.changed_title,
                formselect : action.changed_formselect
            }
        default :
            return state
    }
}

export default reducer