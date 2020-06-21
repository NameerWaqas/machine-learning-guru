import {Reducer} from './reducer'
import {createStore, combineReducers} from 'redux'


export const mainStore = ()=>{
    const store = createStore(
        combineReducers({
            mainState : Reducer
        })
    )
    return store;
}