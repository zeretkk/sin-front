import Header from "./Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";
import {FC, HTMLAttributes} from "react";

interface LayoutProps extends HTMLAttributes<any>{
    container?: boolean
}
const MainLayout: FC<LayoutProps> =({container, ...props})=>{
    return (
        <>
            <Header/>
            <div className={container?'container':''} {...props}>
                <Outlet/>
            </div>
            <Footer/>
        </>

    )
}

export default MainLayout