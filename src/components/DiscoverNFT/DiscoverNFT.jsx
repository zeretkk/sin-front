import c from './discovernft.module.scss'
import {Link} from "react-router-dom";
import Button from "../utility/Button";
export default function DiscoverNFT() {
    return (
        <section className={c.wrapper}>
            <div className={c.header}>
                <div className={c.text}>
                    <h3 className={c.heading}>Discover more NFTs</h3>
                    <p className={c.desc}>Explore new trending NFTs</p>
                </div>
                <Link to={'/'}><Button>See All</Button></Link>
            </div>
            <div className={c.list}>

            </div>
       </section>
    )
}
