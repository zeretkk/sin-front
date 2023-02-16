import Highlighted from "./Highlighted";
import {NavLink} from "react-router-dom";
import Button from "../utility/Button";

export default function Hero() {
    return (
        <section className={'hero'}>
            <div className="hero__text">
                <h1 className="hero__heading">
                    Discover digital art & Collect NFTs
                </h1>
                <p className="hero__description">
                    NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                </p>
                <NavLink to={'/signUp'}><Button filled size={'secondary'}>Get Started</Button></NavLink>
                <div className="hero__statistic">
                    <div className="hero__item">
                        <h4 className="hero__count">240k+</h4>
                        <p className="hero__type">Total Sale</p>
                    </div>
                    <div className="hero__item">
                        <h4 className="hero__count">100k+</h4>
                        <p className="hero__type">Authors</p>
                    </div>
                    <div className="hero__item">
                        <h4 className="hero__count">240k+</h4>
                        <p className="hero__type">Artist</p>
                    </div>
                </div>
            </div>
            <Highlighted/>
        </section>
    )
}
