import {RouterProvider} from 'react-router-dom'
import {router} from "./router";
import {checkAuth} from "./slices/userSlice";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "./store";
function App() :JSX.Element {
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
