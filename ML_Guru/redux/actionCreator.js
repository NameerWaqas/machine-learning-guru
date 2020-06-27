import * as ActionTypes from './actionTypes'
export const Handle_AddNote = (action) =>({
    type: ActionTypes.ADD_NOTE,
    payload: action
})

export const Handle_DeleteNote = (action)=>({
    type: ActionTypes.DELETE_NOTE,
    payload:action
})

export const Handle_Auth=(action)=>({
    type:ActionTypes.AUTH_CHECK,
    payload:action
})