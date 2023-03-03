import logo from '../../../assets/icons/Logo.svg'
import discord from '../../../assets/icons/DiscordLogo.svg'
import youtube from '../../../assets/icons/YoutubeLogo.svg'
import twitter from '../../../assets/icons/TwitterLogo.svg'
import instagram from '../../../assets/icons/InstagramLogo.svg'
import {Link} from "react-router-dom";
import Button from "../../utility/Button";
import c from './footer.module.scss'
export default function Footer() :JSX.Element {
    return (
        <footer className={c.wrapper}>
            <div className={c.container + ' container'}>
                <div className={c.column}>
                    <div>
                        <img src={logo} alt="NFT Marketplace"/>
                    </div>
                    <p className={c.text}>
                        NFT marketplace UI created with Anima for Figma.
                    </p>
                    <div className={c.text}>
                        Join our community
                        <div className={c.social}>
                            <img src={discord} alt="discord"/>
                            <img src={youtube} alt="youtube"/>
                            <img src={twitter} alt="twitter"/>
                            <img src={instagram} alt="instagram"/>
                        </div>
                    </div>

                </div>
                <div className={c.column}>
                    <div>
                        <h5>Explore</h5>
                    </div>
                    <Link to={'/'} className={c.text}>Marketplace</Link>
                    <Link to={'/'} className={c.text}>Rankings</Link>
                    <Link to={'/'} className={c.text}>Connect a wallet</Link>
                </div>
                <div className={c.column}>
                    <div>
                        <h5>Join our weekly digest</h5>
                    </div>
                    <p className={c.text}>
                        Get exclusive promotions & updates straight to your inbox.
                    </p>
                    <div className={c.form}>
                        <input type="email" maxLength={40}/>
                        <Button filled>Subscribe</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
