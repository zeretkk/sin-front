import c from './nftcard.module.scss'
export default function NFTCard({img, name, author, auction}) {
    return (
        <div className={c.card}>
            <div className={c.img}>
                <img src={img} alt={name}/>
            </div>
            <div className={c.text}>
                <p className={c.title}></p>
                <div className={c.author}>
                    <img src={author.img} alt={author.name}/>
                </div>
                <div className={c.auction}>
                    <p className={c.price}>{auction.current}</p>
                    <p className={c.price}>{auction.highest}</p>
                </div>
            </div>
        </div>
    )
}
