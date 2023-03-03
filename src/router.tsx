import {
    createBrowserRouter,
} from "react-router-dom";
// import MainPage from "./pages/MainPage";
import MainLayout from "./Components/Layout/MainLayout";
// import Login from "./components/User/Login/Login";
// import Signup from "./components/User/Signup/Signup";
// import ProfilePage from "./pages/ProfilePage";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<MainLayout container/>,
        children:[
            //{
            //     path: '/',
            //     element: <MainPage/>
            // },
            // {
            //     path:'login',
            //     element: <Login/>,
            // },
            // {
            //     path:'signup',
            //     element: <Signup/>
            // },
        ],
    },
    // {
    //     path:'/profile',
    //     element: <MainLayout/>,
    //     children:[
    //         {
    //             path: '/profile',
    //             element: <ProfilePage/>
    //         },
    //     ]
    // },
]);