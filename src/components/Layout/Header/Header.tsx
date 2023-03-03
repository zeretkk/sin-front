import logo from '../../../assets/icons/Logo.svg'
import {NavLink} from "react-router-dom";
import Button from "../../utility/Button";
import {useSelector} from "react-redux";
import userIcon from '../../../assets/icons/User.svg'
import c from './header.module.scss'
import dropdown from '../../../assets/icons/List.svg'
import eyeSlash from '../../../assets/icons/EyeSlash.svg'
import {useState} from "react";
import {RootState} from "../../../store";
function Header() :JSX.Element {
    const [isVisible, setVisible] = useState(false)
    const user = useSelector((state :RootState) => state.user)
    const handleDropdown=()=>{
        setVisible(!isVisible)
    }
    return (
        <header className={c.wrapper}>
            <div className={c.logo}>
                <img src={logo} alt="NFT-Market"/>
            </div>
            <button className={c.dropdownButton} onMouseDown={handleDropdown}><img src={dropdown} alt="Dropdown"/></button>
            <nav className={`${c.menu} ${isVisible?c.menuVisible:''}`}>
                <NavLink className={c.link} to={'/'}>Marketplace</NavLink>
                <NavLink className={c.link} to={'/'}>Rankings</NavLink>
                {user.loaded
                    ?<NavLink className={c.link} to={'/profile'}>
                        <Button size={'secondary'} icon={userIcon}>Profile</Button>
                    </NavLink>
                    :<NavLink className={c.link} to={'/signup'}>
                        <Button size={'secondary'} filled>Sign Up</Button>
                    </NavLink>
                }
                <Button className={c.dropdownButton} onMouseDown={handleDropdown} icon={eyeSlash}>Hide</Button>
            </nav>
        </header>
    )
}

export default Header