import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {User} from "../types/User";
import {RootState} from "../store";
import {UserService} from "../services/UserService";

const dummy :User = {
    _id: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    username: 'example',
    email: 'example@example.com',
    bio: '',
    cover: '',
    volume: 0,
    sold: 0,
    followers: 0,
    links: [],
    createdAt: '2023-02-20T13:31:33.876Z',
}
interface userState {
    data: User
    error: boolean
    loaded: boolean
    loading:boolean
}
const initialState = {
        data: dummy,
        error:false,
        loaded:false,
        loading: false

}as userState
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        update:(state, action)=>{
            if(action?.payload?.accessToken){
                localStorage.setItem('token', action.payload.accessToken)
            }
            state.data = action.payload.user
            state.loaded = true
        },
        drop:(state)=>{
            state.data = dummy
            state.loaded = false
            localStorage.removeItem('token')
        }
    },
    extraReducers(builder){
        builder
            .addCase(checkAuth.pending, (state)=>{
                state.loading = true
            })
            .addCase(checkAuth.fulfilled, (state, action)=>{
                state.data = action.payload.user
                state.loading = false
                state.loaded = true
                localStorage.setItem('token', action.payload.accessToken)
            })
            .addCase(checkAuth.rejected, (state)=>{
                state.data = dummy
                state.loaded = false
                state.loading = false
                localStorage.removeItem('token')
            })
    }
})


export const checkAuth = createAsyncThunk('user/checkAuth', async()=>{
    return UserService.refresh()
}, {
    condition(arg, {getState}) {
        const state = getState() as RootState
        const isLoading = state.user.loading
        return !isLoading
    }
})
export const {update, drop} = userSlice.actions
export default userSlice.reducer