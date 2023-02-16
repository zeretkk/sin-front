import c from './login.module.scss'
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {update} from "../../../slices/userSlice";
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [validity, setValidity] = useState({})
    const dispatch = useDispatch()
    const submitForm=(e)=>{
        e.preventDefault()
        if(validateForm()){
            setError(false)
            axios.post('http://localhost:3001/user/login', {password, username})
                .then(r =>{
                    dispatch(update(r.data))
                })
                .catch(err=>{
                    console.log(err.response.data)
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
    return (
        <div className={c.wrapper}>
            <Link className={c.close} to={'/'}>X</Link>
            <form action="/" noValidate className={c.form} onSubmit={submitForm}>
                <div className={c.group}>
                    <h2 className={c.heading}>SignIn</h2>
                    {error ?? <p className={c.error}>Something went wrong</p>}
                </div>
                <div className={c.group}>
                    <label htmlFor='username' className={c.label}>Username <span className={c.errorLabel}>{validity?.username}</span></label>
                    <input type="text" id='username' name='username' placeholder='username' className={`${c.input} ${validity?.username?c.errorInput:''}`}
                           value={username} onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>Password <span className={c.errorLabel}>{validity?.password}</span></label>
                    <input type="password" id='password' name='password' placeholder='password' className={`${c.input} ${validity?.password?c.errorInput:''}`}
                           value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <button className={c.button}>Submit</button>
                    <NavLink to={'/signup'}>SignUp</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login