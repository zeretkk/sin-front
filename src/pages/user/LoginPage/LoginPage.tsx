import c from '../userform.module.scss'
import {FC, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import image from "../../../assets/images/login.png";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from 'yup'
import {RootState} from "../../../store";
import {UserService} from "../../../services/UserService";

const LoginPage: FC =()=> {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const user = useSelector((state :RootState) => state.user)
    const formik = useFormik({
        initialValues:{
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Must be filled').min(3, 'Must be at least 3 characters long'),
            password: Yup.string().required('Must be filled').min(6, 'Must be at least 6 characters long'),
        }),
        onSubmit: async values => {
            await sendCredentials(values)
        }
    })

    const sendCredentials= async (values :typeof formik.values)=>{
        setError('')
        const error = await UserService.login(values)
        setError(error)
    }

    useEffect(
        ()=>{
            if(user.loaded){
                navigate('/profile')
            }
        }, [user, navigate]
    )
    return (
        <div className={c.wrapper}>
            <div className={c.image}>
                <img src={image} alt="login"/>
            </div>
            <form action="/" noValidate className={c.form} onSubmit={formik.handleSubmit}>
                <div className={c.group}>
                    <h2 className={c.heading}>Join Account</h2>
                    <p className={c.text}>Welcome back! enter your details and continue creating, collecting and selling NFTs.</p>
                    {error && <p className={c.errorLabel}>{error}</p>}

                </div>
                <div className={c.group}>
                    <label htmlFor='username' className={c.label}>{formik.errors.username}</label>
                    <input type="text" id='username' name='username' placeholder='Username'
                           className={c.input}
                           value={formik.values.username}
                           onChange={formik.handleChange}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>{formik.errors.password}</label>
                    <input type="password" id='password' name='password' placeholder='Password'
                           className={c.input}
                           value={formik.values.password}
                           onChange={formik.handleChange}
                    />
                </div>
                <div className={c.group}>
                    <button className={c.button}>SignIn</button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage