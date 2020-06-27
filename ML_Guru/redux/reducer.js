import * as ActionTypes from './actionTypes'
import {stateObj} from './state'

export const reducer = (state= stateObj,action)=>{
    switch(action.type){
        case ActionTypes.ADD_NOTE:
            state.notes.push(action.payload)
            return {...state}

        case ActionTypes.DELETE_NOTE:
            state.notes.pop(action.payload)
            return {...state}

        case ActionTypes.AUTH_CHECK:
            state.user.auth = true
            return {...state}

        default:
            return {...state}
    }
}