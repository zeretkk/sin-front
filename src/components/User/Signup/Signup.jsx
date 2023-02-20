import c from "../userform.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import image from '../../../assets/images/login.png'
import {useSelector} from "react-redux";

function Signup() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitPassword, setSubmitPassword] = useState('')
    const [validity, setValidity] = useState({})
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const user = useSelector(state => state.user.value.data)

    const submitForm = (e) => {
        e.preventDefault()
        if(validateForm()){
            setError(false)
            axios.post('http://localhost:3001/user', {password, username, email})
                .then(() =>{
                    navigate('/login')
                })
                .catch(err=>{
                    console.log(err)
                    switch (err?.response?.data?.type){
                        case 'unique':
                            setValidity({...validity, username: 'Username is already taken'})
                            break
                        default:
                            setError(true)
                    }
                })
        }
    }
    const validateForm=()=>{
        let errObj = {}
        if(username.length < 3){
            errObj = {...errObj, username: 'Must be at least 3 characters long'}
        }
        if(password.length < 6){
            errObj = {...errObj, password: 'Must be at least 6 characters long'}
        }
        if(submitPassword !== password){
            errObj = {...errObj, submitPassword: 'Passwords must match'}
        }
        setValidity(errObj)
        return !Object.keys(errObj).length>0
    }
    useEffect(
        ()=>{
            if(user){
                navigate('/profile')
            }
        }, [user, navigate]
    )
    return (
        <div className={c.wrapper}>
            <div className={c.image}>
                <img src={image} alt="login"/>
            </div>
            <form action="/" noValidate className={c.form} onSubmit={submitForm}>
                <div className={c.group}>
                    <h2 className={c.heading}>Create Account</h2>
                    <p className={c.text}>Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                    {error && <p className={c.errorLabel}>Something went wrong try again later</p>}

                </div>
                <div className={c.group}>
                    <label htmlFor='username' className={c.label}>{validity?.username}</label>
                    <input type="text" id='username' name='username' placeholder='Username'
                           className={`${c.input} ${validity?.username?c.errorInput:''}`}
                           value={username}
                           onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='email' className={c.label}>{validity?.email}</label>
                    <input type="email" id='email' name='email' placeholder='Email'
                           className={`${c.input} ${validity?.email?c.errorInput:''}`}
                           value={email}
                           onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>{validity?.password}</label>
                    <input type="password" id='password' name='password' placeholder='Password' className={`${c.input} ${validity?.password?c.errorInput:''}`}
                           value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='repassword' className={c.label}>{validity?.submitPassword}</label>
                    <input type="password" id='repassword' name='repassword' placeholder='Submit Password'
                           className={`${c.input} ${validity?.submitPassword?c.errorInput:''}`}
                           value={submitPassword}
                           onChange={(e)=>setSubmitPassword(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <button className={c.button}>SignUp</button>
                </div>
                <p>Already have account? <Link to={'/login'} className={c.link}>Sign in</Link></p>

            </form>
        </div>
    )
}

export default Signup