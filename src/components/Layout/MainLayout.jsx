import Header from "./Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

function MainLayout() {
    return (
        <>
            <Header/>
            <div className='container'>
                <Outlet/>
            </div>
            <Footer/>
        </>

    )
}

export default MainLayout