import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value: {
        data:null,
        error:false
    }
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
    }
})
export const {register} = userSlice.actions
export default userSlice.reducer