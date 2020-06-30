import * as ActionTypes from './actionTypes'
import {stateObj} from './state'

export const reducer = (state= stateObj,action)=>{
    switch(action.type){
        case ActionTypes.ADD_NOTE:
            state.root.notes.push(action.payload)
            return {...state}

        case ActionTypes.DELETE_NOTE:
            state.root.notes.pop(action.payload)
            return {...state}

        case ActionTypes.AUTH_CHECK:
            state.root.user.auth = true
            state.root.user.name = action.payload.name
            state.root.user.email = action.payload.email
            return {...state}

        default:
            return state
    }
}