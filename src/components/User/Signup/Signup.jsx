import c from "../Login/login.module.scss";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submitPassword, setSubmitPassword] = useState('')
    const [validity, setValidity] = useState({})
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault()
        if(validateForm()){
            setError(false)
            axios.post('http://localhost:3001/user', {password, username, name, email})
                .then(() =>{
                    navigate('/login')
                })
                .catch(err=>{
                    console.log(err.response.data)
                    switch (err.response.data.type){
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
        if(name.length < 3){
            errObj = {...errObj, name: 'Must be at least 3 characters long'}
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
    return (
        <div className={c.wrapper}>
            <Link className={c.close} to={'/'}>X</Link>
            <form action="/" noValidate className={c.form} onSubmit={submitForm}>
                <div className={c.group}>
                    <h2 className={c.heading}>SignUp</h2>
                    {error ?? <p className={c.error}>Something went wrong</p>}
                </div>
                <div className={c.group}>
                    <label htmlFor='name' className={c.label}>Name <span className={c.errorLabel}>{validity?.name}</span></label>
                    <input type="text" id='name' name='name' placeholder='name' className={`${c.input} ${validity?.name?c.errorInput:''}`}
                           value={name} onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='username' className={c.label}>Username <span className={c.errorLabel}>{validity?.username}</span></label>
                    <input type="text" id='username' name='username' placeholder='username' className={`${c.input} ${validity?.username?c.errorInput:''}`}
                           value={username} onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>E-mail <span className={c.errorLabel}>{validity?.email}</span></label>
                    <input type="email" id='email' name='email' placeholder='email' className={`${c.input} ${validity?.email?c.errorInput:''}`}
                           value={email} onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>Password <span className={c.errorLabel}>{validity?.password}</span></label>
                    <input type="password" id='password' name='password' placeholder='password' className={`${c.input} ${validity?.password?c.errorInput:''}`}
                           value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='repassword' className={c.label}>Submit Password <span className={c.errorLabel}>{validity?.submitPassword}</span></label>
                    <input type="password" id='repassword' name='repassword' placeholder='submit password' className={`${c.input} ${validity?.submitPassword?c.errorInput:''}`}
                           value={submitPassword} onChange={(e)=>setSubmitPassword(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <button className={c.button}>SignUp</button>
                </div>
            </form>
        </div>
    )
}

export default Signup