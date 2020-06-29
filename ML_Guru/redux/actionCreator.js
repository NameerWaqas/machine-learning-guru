import * as ActionTypes from './actionTypes'
export const Handle_AddNote = (param) =>({
    type: ActionTypes.ADD_NOTE,
    payload: param
})

export const Handle_DeleteNote = (param)=>({
    type: ActionTypes.DELETE_NOTE,
    payload:param
})

export const Handle_Auth=(param)=>({
    type:ActionTypes.AUTH_CHECK,
    payload:param
})