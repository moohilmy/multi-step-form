import {configureStore} from "@reduxjs/toolkit"
import { formReducer } from "./slice/formSlice.js"


const store = configureStore({
    reducer: {
        form: formReducer
    }
})


export default store