import React, {useEffect} from 'react';
import './App.scss';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {useDispatch} from "react-redux";
import {checkAuth} from "./slices/userSlice";

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(checkAuth())
        }
    }, [dispatch])

  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
