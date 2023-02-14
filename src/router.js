import {
    createBrowserRouter,
} from "react-router-dom";
import StandartLayout from "./components/Layout/StandartLayout";
import Login from "./components/Login/Login";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <StandartLayout/>,
        children:[
            {
                path:'login',
                element: <Login/>
            }
        ]
    },
]);