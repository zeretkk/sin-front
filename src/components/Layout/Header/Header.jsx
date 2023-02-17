import logo from '../../../assets/icons/Logo.svg'
import {NavLink} from "react-router-dom";
import Button from "../../utility/Button";
import {useSelector} from "react-redux";
import userIcon from '../../../assets/icons/User.svg'
import c from './header.module.scss'
function Header() {
    const user = useSelector(state => state.user.value.data)
    return (
        <header className={c.wrapper}>
            <div className={c.logo}>
                <img src={logo} alt="NFT-Market"/>
            </div>
            <nav className={c.menu}>
                <NavLink className={c.link} to={'/'}>Marketplace</NavLink>
                <NavLink className={c.link} to={'/'}>Rankings</NavLink>
                {user
                    ?<NavLink className={c.link} to={'/profile'}>
                        <Button size={'secondary'} icon={userIcon}>Profile</Button>
                    </NavLink>
                    :<NavLink className={c.link} to={'/signup'}>
                        <Button size={'secondary'} filled>Sign Up</Button>
                    </NavLink>
                }
            </nav>
        </header>
    )
}

export default Header