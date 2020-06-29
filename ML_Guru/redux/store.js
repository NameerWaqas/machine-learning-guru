import { reducer } from './reducer'
import { createStore, combineReducers , applyMiddleware} from "redux";
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger';

let rootReducer = combineReducers({
    mainState:reducer
})


let persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

let pReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(pReducer)
    
export const persistor = persistStore(store)

