import image from '../../../assets/images/Image Placeholder1x.png'
import avatar from '../../../assets/images/Avatars/Animakid.png'
import c from './highlighted.module.scss'
export default function Highlighted() {
    return (
        <div className={c.wrapper}>
            <div className={c.img}>
                <img src={image} alt="Highlighted"/>
            </div>
            <div className={c.description}>
                <h5>Space Walking</h5>
                <div className={c.author}>
                    <img src={avatar} alt="Animakid avatar" className={c.avatar}/>
                    <p className="highlighted__name">Animakid</p>
                </div>
            </div>
        </div>
    )
}
