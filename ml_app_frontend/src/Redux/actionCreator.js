import * as AT from './actionsTypes'

export const HandleSlope = (slope) =>({
type : AT.slopeSliderRegression,
payload: slope
})
export const HandleIntercept = (intercept) =>({
type : AT.interceptSliderRegression,
payload: intercept
})

export const HandleBreadcrumb = (currentCrumb)=>({
    type: AT.currentBreadCrumb,
    payload: currentCrumb
})