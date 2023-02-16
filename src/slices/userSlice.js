import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: {
        data:null,
        loading:false,
        error:false
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        register: (state, action)=>{
               fetch('http://localhost:3001/user', {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application-json; charset=utf-8'
                    },
                    body: JSON.stringify(action.payload)
                })
                   .then(response=>response.json())
                   .then(data=>state.value= {...state.value, user:data})
                   .catch(err=>{
                       console.log(err)
                   })
        }
    }
})
export const {register} = userSlice.actions
export default userSlice.reducer