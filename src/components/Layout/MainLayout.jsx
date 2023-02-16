import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Hero from "../Hero/Hero";

function MainLayout() {
    return (
        <>
            <Header/>
            <Hero/>
            <Outlet/>
        </>
    )
}

export default MainLayout