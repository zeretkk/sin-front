import logo from '../../assets/icons/Logo.svg'
import {NavLink} from "react-router-dom";
import Button from "../utility/Button";
function Header() {
    return (
        <header className='header'>
            <div className="header__logo">
                <img src={logo} alt="NFT-Market"/>
            </div>
            <nav className="header__menu">
                <NavLink className={'header__link'} to={'/'}>Marketplace</NavLink>
                <NavLink className={'header__link'} to={'/'}>Rankings</NavLink>
                <NavLink className={'header__link'} to={'/'}>Connect a Wallet</NavLink>
                <NavLink className={'header__link'} to={'/a'}>
                    <Button size={'secondary'} filled>Sign Up</Button>
                </NavLink>
            </nav>
        </header>
    )
}

export default Header