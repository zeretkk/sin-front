import image from '../../assets/images/Image Placeholder1x.png'
import avatar from '../../assets/images/Avatars/Animakid.png'
export default function Highlighted() {
    return (
        <div className="highlighted">
            <div className="highlighted__img">
                <img src={image} alt="Highlighted"/>
            </div>
            <div className="highlighted__description">
                <h5 className="highlighted__title">Space Walking</h5>
                <div className="highlighted__author">
                    <img src={avatar} alt="Animakid avatar" className="highlighted__avatar"/>
                    <p className="highlighted__name">Animakid</p>
                </div>
            </div>
        </div>
    )
}
