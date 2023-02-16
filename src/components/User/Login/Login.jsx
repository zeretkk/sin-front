import c from './login.module.scss'
import {useState} from "react";
import {Link} from "react-router-dom";
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const submitForm=(e)=>{
        e.preventDefault()
    }
    return (
        <div className={c.wrapper}>
            <Link className={c.close} to={'/'}>X</Link>
            <form action="/" noValidate className={c.form} onSubmit={submitForm}>
                <div className={c.group}>
                    <h2 className={c.heading}>LogIn</h2>
                </div>
                <div className={c.group}>
                    <label htmlFor='username' className={c.label}>Username</label>
                    <input type="text" id='username' name='username' placeholder='username' className={c.input}
                           value={username} onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <label htmlFor='password' className={c.label}>Password</label>
                    <input type="password" id='password' name='password' placeholder='password' className={c.input}
                           value={password} onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div className={c.group}>
                    <button className={c.button}>LogIn</button>
                    <Link to={'/signup'}>SignUp</Link>
                </div>
            </form>
        </div>
    )
}

export default Login