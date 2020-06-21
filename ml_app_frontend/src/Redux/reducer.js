import * as vars from './state'
import * as AT from './actionsTypes'

export const Reducer = (
    state = vars.state, action
) => {
    // console.log(action.payload)
    switch (action.type) {
        case AT.slopeSliderRegression:
            console.log(action.payload,'slope')
            state.regression.slopeIntercept.slope = action.payload
            return {...state}

        case AT.interceptSliderRegression:
            state.regression.slopeIntercept.intercept = action.payload
            return {...state}

        case AT.currentBreadCrumb:
            if(action.payload == 'line'){
                state.regression.slopeIntercept.breadcrumb.line = true
                state.regression.slopeIntercept.breadcrumb.scatter = false
                state.regression.slopeIntercept.breadcrumb.linescatter = false                
            }
            else if(action.payload == 'scatter'){
                state.regression.slopeIntercept.breadcrumb.line = false
                state.regression.slopeIntercept.breadcrumb.scatter = true
                state.regression.slopeIntercept.breadcrumb.linescatter = false                
            }
            else{
                state.regression.slopeIntercept.breadcrumb.line = false
                state.regression.slopeIntercept.breadcrumb.scatter = false
                state.regression.slopeIntercept.breadcrumb.linescatter = true                
            }
            return {...state}

        default:
            return state
    }
}
