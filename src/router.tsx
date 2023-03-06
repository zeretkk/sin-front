import {
    createBrowserRouter,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import MainLayout from "./components/Layout/MainLayout";
import LoginPage from "./pages/user/LoginPage/LoginPage";
import SignupPage from "./pages/user/SignupPage/SignupPage";
import ProfilePage from "./pages/user/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout container/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path:'login',
                element: <LoginPage/>,
            },
            {
                path:'signup',
                element: <SignupPage/>
            },
        ],
    },
    {
        path:'/profile',
        element: <MainLayout/>,
        children:[
            {
                path: '/profile',
                element: <ProfilePage/>
            },
        ]
    },
]);