import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

function StandartLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}

export default StandartLayout