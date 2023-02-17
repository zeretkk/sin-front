import Highlighted from "./Highlighted/Highlighted";
import {NavLink} from "react-router-dom";
import Button from "../utility/Button";
import c from './hero.module.scss'

export default function Hero() {
    return (
        <section className={c.wrapper}>
            <div className={c.text}>
                <h1 className={c.heading}>
                    Discover digital art & Collect NFTs
                </h1>
                <p className={c.description}>
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                </p>
                <NavLink to={'/signup'}><Button filled size={'secondary'}>Get Started</Button></NavLink>
                <div className={c.statistic}>
                    <div className={c.item}>
                        <h4 className="hero__count">240k+</h4>
                        <p className="hero__type">Total Sale</p>
                    </div>
                    <div className={c.item}>
                        <h4 className="hero__count">100k+</h4>
                        <p className="hero__type">Authors</p>
                    </div>
                    <div className={c.item}>
                        <h4 className="hero__count">240k+</h4>
                        <p className="hero__type">Artist</p>
                    </div>
                </div>
            </div>
            <Highlighted/>
        </section>
    )
}
