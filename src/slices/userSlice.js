import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value: {
        data: {},
        error:false
    }
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        update:(state, action)=>{
            state.value.data = action.payload
        }
    }
})
export const {update} = userSlice.actions
export default userSlice.reducer