import {RouterProvider} from 'react-router-dom'
import {router} from "./router";
import {checkAuth} from "./slices/userSlice";
import {FC, useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store";

const App: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(checkAuth())
        }
    }, [dispatch])
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
