import c from '../userform.module.scss'
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {update} from "../../../slices/userSlice";
import image from "../../../assets/images/login.png";
import {useNavigate} from "react-router-dom";
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [validity, setValidity] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user.value.data)
    const submitForm=(e)=>{
        e.preventDefault()
        if(validateForm()){
            setError(false)
            axios.post('http://localhost:3001/user/login', {password, username})
                .then(r =>{
                    dispatch(update(r.data))
                    navigate('/profile')
                })
                .catch(err=>{
                    console.log(err)
                    setError(true)
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
                    <h2 className={c.heading}>Join Account</h2>
                    <p className={c.text}>Welcome back! enter your details and continue creating, collecting and selling NFTs.</p>
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
                    <label htmlFor='password' className={c.label}>{validity?.password}</label>
                    <input type="password" id='password' name='password' placeholder='Password'
                           className={`${c.input} ${validity?.password?c.errorInput:''}`}
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <button className={c.button}>SignIn</button>
                </div>
            </form>
        </div>
    )
}

export default Login