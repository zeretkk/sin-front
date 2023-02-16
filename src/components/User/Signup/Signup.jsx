import c from "../Login/login.module.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {register} from "../../../slices/userSlice";

function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [submitPassword, setSubmitPassword] = useState('')
    const dispatch = useDispatch()

    const submitForm = (e) => {
      e.preventDefault()
        dispatch(register({
            username,
            email,
            pass:password,
        }))

    }
    return (
        <div className={c.wrapper}>
            <Link className={c.close} to={'/'}>X</Link>
            <form action="/" noValidate className={c.form} onSubmit={submitForm}>
                <div className={c.group}>
                    <h2 className={c.heading}>SignUp</h2>
                </div>
                <div className={c.group}>
                    <label htmlFor='username' className={c.label}>Username</label>
                    <input type="text" id='username' name='username' placeholder='username' className={c.input}
                           value={username} onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>E-mail</label>
                    <input type="email" id='email' name='email' placeholder='email' className={c.input}
                           value={email} onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>Password</label>
                    <input type="password" id='password' name='password' placeholder='password' className={c.input}
                           value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>Submit Password</label>
                    <input type="password" id='repassword' name='repassword' placeholder='submit password' className={c.input}
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