import {createSlice} from "@reduxjs/toolkit";

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
            state.value.data = dummy
            state.value.loaded = false
            localStorage.removeItem('token')
        }
    }
})
export const {update, logout} = userSlice.actions
export default userSlice.reducer