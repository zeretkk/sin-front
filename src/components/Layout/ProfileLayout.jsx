import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Profile from "../User/Profile/Profile";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export default function ProfileLayout() {
    const navigate = useNavigate()
    const user = useSelector(state => state.user.value.data)
    useEffect(()=>{
        navigate('/')
    }, [user])
    if(!user) return (
        <>
            <Header/>
            <Footer/>
        </>
    )
    return (
        <>
            <Header/>
            <Profile/>
            <Footer/>
        </>
    )
}
