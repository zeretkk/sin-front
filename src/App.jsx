import React, {useEffect} from 'react';
import './App.scss';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {useSelector, useDispatch} from "react-redux";

function App() {
    const userInfo = useSelector(state => state.user.value)
    const dispatch = useDispatch()
    useEffect(()=>{

    }, [userInfo, dispatch])

  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
