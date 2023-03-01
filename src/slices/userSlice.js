import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../utils/client";

const dummy = {
    _id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    name: null,
    username: 'example',
    email: 'example@example.com',
    bio: '',
    cover: '',
    volume: 0,
    sold: 0,
    followers: 0,
    links: [],
    createdAt: '2023-02-20T13:31:33.876Z',
    token: ''
}
const initialState = {
    value: {
        data: dummy,
        error:false,
        loaded:false,
        loading: false
    }
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        update:(state, action)=>{
            if(action?.payload?.accessToken){
                localStorage.setItem('token', action.payload.accessToken)
            }
            state.value.data = action.payload.user
            state.value.loaded = true
        },
        drop:(state)=>{
            state.value.data = dummy
            state.value.loaded = false
            localStorage.removeItem('token')
        }
    },
    extraReducers(builder){
        builder
            .addCase(checkAuth.pending, (state)=>{
                state.value.loading = true
            })
            .addCase(checkAuth.fulfilled, (state, action)=>{
                state.value.data = action.payload.user
                state.value.loading = false
                state.value.loaded = true
                localStorage.setItem('token', action.payload.accessToken)
            })
            .addCase(checkAuth.rejected, (state)=>{
                state.value.data = dummy
                state.value.loaded = false
                state.value.loading = false
                localStorage.removeItem('token')
            })
    }
})


export const checkAuth = createAsyncThunk('user/checkAuth', async()=>{

    const response = await api.get('/user/refresh')
    return response.data
}, {
    condition(arg, {getState}) {
        const state = getState()
        const isLoading = state.user.value.loading
        return !isLoading
    }
})
export const {update, drop} = userSlice.actions
export default userSlice.reducer