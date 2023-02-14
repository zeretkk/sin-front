import c from './header.module.scss'
import Container from "../Layout/Container/Container";
import {NavLink} from "react-router-dom";
function Header() {
    return (
        <header className={c.wrapper}>
            <Container className={c.container}>
                <div className={c.menu}>
                    <p>Тут возможно будет меню</p>
                </div>
                <nav className={c.navbar}>
                    <NavLink to={'/login'} className={c.btn}>Login</NavLink>
                </nav>
            </Container>
        </header>
    )
}

export default Header