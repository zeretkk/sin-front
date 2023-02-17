import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value: {
        data: null,
        error:false,
        loaded:false,
    }
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        update:(state, action)=>{
            if(action?.payload?.token){
                localStorage.setItem('token', action.payload.token)
            }
            state.value.data = action.payload
            state.value.loaded = true
        },
        logout:(state)=>{
            state.value.data = null
            state.value.loaded = true
            localStorage.removeItem('token')
        }
    }
})
export const {update, logout} = userSlice.actions
export default userSlice.reducer