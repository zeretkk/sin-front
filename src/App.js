import React, {useEffect} from 'react';
import './App.scss';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {update} from "./slices/userSlice";

function App() {
    const userInfo = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }else{
            delete axios.defaults.headers.common['Authorization']
        }
        if(localStorage.getItem('token') && !userInfo.loaded){
            axios.post('http://localhost:3001/user/login', {})
                .then(resp => dispatch(update(resp.data)))
                .catch(()=> localStorage.removeItem('token'))
        }
    }, [userInfo, dispatch])

  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
