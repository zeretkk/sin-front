import logo from '../../assets/icons/Logo.svg'
import discord from '../../assets/icons/DiscordLogo.svg'
import youtube from '../../assets/icons/YoutubeLogo.svg'
import twitter from '../../assets/icons/TwitterLogo.svg'
import instagram from '../../assets/icons/InstagramLogo.svg'
import {Link} from "react-router-dom";
import Button from "../utility/Button";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <div className="footer__column">
                    <div className="footer__logo">
                        <img src={logo} alt="NFT Marketplace"/>
                    </div>
                    <p className="footer__text">
                        NFT marketplace UI created with Anima for Figma.
                    </p>
                    <div className="footer__text">
                        Join our community
                        <div className="footer__social">
                            <img src={discord} alt="discord"/>
                            <img src={youtube} alt="youtube"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                    </div>

                </div>
                <div className="footer__column">
                    <div className="footer__heading">
                        <h5>Explore</h5>
                    </div>
                    <Link to={'/'} className='footer__text'>Marketplace</Link>
                    <Link to={'/'} className='footer__text'>Rankings</Link>
                    <Link to={'/'} className='footer__text'>Connect a wallet</Link>
                </div>
                <div className="footer__column">
                    <div className="footer__heading">
                        <h5>Join our weekly digest</h5>
                    </div>
                    <p className="footer__text">
                        Get exclusive promotions & updates straight to your inbox.
                    </p>
                    <div className="footer__form">
                        <input type="email"/>
                        <Button filled>Subscribe</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
