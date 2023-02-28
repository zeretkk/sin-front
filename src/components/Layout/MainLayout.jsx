import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";

function MainLayout({container}) {
    return (
        <>
            <Header/>
            <div className={container?'container':''}>
                <Outlet/>
            </div>
            <Footer/>
        </>

    )
}

export default MainLayout