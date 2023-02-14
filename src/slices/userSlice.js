import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login: async()=>{

        }
    }
})