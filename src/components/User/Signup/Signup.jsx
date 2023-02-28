import c from "../userform.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup"
import image from '../../../assets/images/login.png'
import api from "../../../utils/client";
import {update} from "../../../slices/userSlice";

function Signup() {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const user = useSelector(state => state.user.value)

    const sendCredentials = (values) => {
            setError(false)
            api.post('http://localhost:3001/user/register', values)
                .then((r) =>{
                    update(r.data.user)
                    localStorage.setItem('token', r.data.user.accessToken)
                    navigate('/profile')
                })
                .catch(err=>{
                    switch (err?.response?.data?.type){
                        case 'unique':
                            setError('Username/email must be unique')
                            break
                        default:
                            setError('Something went wrong')
                    }
                })
    }

    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            submitPassword:''
        },
        validationSchema:Yup.object({
            username: Yup.string().required('Must be filled').min(3, 'Must be at least 3 characters long'),
            email: Yup.string().required('Must be filled').email('Should be email'),
            password: Yup.string().required('Must be filled').min(6, 'Must be at least 6 characters long'),
            submitPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: values => {
            sendCredentials(values)
        }
    })
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
                    <h2 className={c.heading}>Create Account</h2>
                    <p className={c.text}>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
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
                    <label htmlFor='email' className={c.label}>{formik.errors.email}</label>
                    <input type="email" id='email' name='email' placeholder='Email'
                           className={c.input}
                           value={formik.values.email}
                           onChange={formik.handleChange}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>{formik.errors.password}</label>
                    <input type="password" id='password' name='password' placeholder='Password' className={c.input}
                           value={formik.values.password} onChange={formik.handleChange}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='submitPassword' className={c.label}>{formik.errors.submitPassword}</label>
                    <input type="password" id='submitPassword' name='submitPassword' placeholder='Submit Password'
                           className={c.input}
                           value={formik.values.submitPassword}
                           onChange={formik.handleChange}
                    />
                </div>
                <div className={c.group}>
                    <button className={c.button} type='submit'>SignUp</button>
                </div>
                <p>Already have account? <Link to={'/login'} className={c.link}>Sign in</Link></p>
            </form>
        </div>
    )
}

export default Signup