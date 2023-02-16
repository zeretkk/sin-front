import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Login from "./components/User/Login/Login";
import Signup from "./components/User/Signup/Signup";
import MainPage from "./pages/MainPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path:'login',
                element: <Login/>,
            },
            {
                path:'signup',
                element: <Signup/>
            },
        ]
    },
]);