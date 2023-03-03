import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";

interface LayoutProps {
    container?: boolean
}
function MainLayout({container}: LayoutProps) :JSX.Element {
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