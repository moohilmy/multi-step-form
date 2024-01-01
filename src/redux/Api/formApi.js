import { formActions } from "../slice/formSlice.js"
export function fillFormData(value){
    return async (dispatch) => {
        dispatch(formActions.setFormData(value))
    }
}

export function changeDuration(){
    return async (dispatch) => {
        dispatch(formActions.setISYearly())
    }
}
export function clearIsYearly(){
    return async (dispatch) => {
        dispatch(formActions.clearIsYearly())
    }
}
export function reloadISYearly(){
    return async (dispatch) => {
        dispatch(formActions.reloadISYearly())
    }
}

export function setselectorPlan(value){
    return async (dispatch) => {
        dispatch(formActions.setSelectorPlan(value))
    }
}
export function setactiveSection(value){
    return async (dispatch) => {
        dispatch(formActions.setactiveSection(value))
    }
}
export function setAddOns(value){
    return async (dispatch) => {
        dispatch(formActions.setAddOns(value))
    }
}
export function clearselectorPlan(){
    return async (dispatch) => {
        dispatch(formActions.clearSelectorPlan())
    }
}
export function calcTotalPrice(){
    return async (dispatch) => {
        dispatch(formActions.calcTotalPrice())
    }
}
export function calcPricing(){
    return async (dispatch) => {
        dispatch(formActions.calcPricing())
    }
}
