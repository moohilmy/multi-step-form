import { createSlice } from "@reduxjs/toolkit";


const formSlice = createSlice(
    {name: "form",
    initialState:{
        formData:{
            name: '',
            email: '',
            phoneNumber: ''
        },
        isYearly: false,
        selectorPlan:null,
        activeSection: "your-info",
        addOns: [],
        totalPrice: [],
        pricing: null
        },
    reducers:{
        setFormData(state,action){
            state.formData = action.payload
        },
        setISYearly(state){
            state.isYearly = !state.isYearly
            state.selectorPlan = null
        },
        clearIsYearly(state){
            state.isYearly = false
        },
        setSelectorPlan(state,action){
            state.selectorPlan = action.payload
        },
        clearSelectorPlan(state,action){
            state.selectorPlan = null
        },
        setactiveSection(state,action){
            state.activeSection = action.payload
        },
        setAddOns(state,action){
            state.addOns  = action.payload
        },
        reloadISYearly(state){
            state.isYearly = state.isYearly
        },
        calcTotalPrice(state){
            const addOnsPrice = state.addOns.map((b)=> b.price)
            state.totalPrice = [state?.selectorPlan?.price,...addOnsPrice]
        },
        calcPricing(state){
            let values = state.totalPrice;
            let sum = 0;
            for (let i = 0; i < values.length; i++) {
                let numericValue = parseFloat(values[i].replace(/[^\d.-]/g, ''));
                sum += numericValue;
}
        state.pricing = sum
        }
        }
}
)

const formReducer = formSlice.reducer
const formActions = formSlice.actions

export {formActions,formReducer}

