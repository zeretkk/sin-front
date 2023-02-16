import c from './hero.module.scss'
import Container from "../Layout/Container/Container";
import {NavLink} from "react-router-dom";

function Hero() {
    return (
        <main className={c.wrapper}>
            <Container className={c.container}>
                <h1 className={c.heading}>Очень красивый макет</h1>
                <p className={c.text}>Очень мало компонентов наверстал</p>
                <NavLink to={'/login'} className={c.btn}>LogIn</NavLink>
            </Container>
        </main>
    )
}

export default Hero